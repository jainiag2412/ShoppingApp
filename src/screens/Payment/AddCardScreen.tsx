import React, { useEffect, useState } from "react";
import { View } from "react-native";
import colours from "../../assets/constants/colours";
import Statusbar from "../../components/common/Statusbar";
import { RootStackParamList } from "../../types/NavigationTypes";
import { styles } from "./AddCardScreen-style";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/common/Header";
import NoScaleText from "../../components/common/NoScaleText";
import BottomButton from "../../components/common/BottomButton";
import { NoScaleTextInput } from "../../components/common/NoScaleTextInput";
import { moderateScale } from "../../assets/constants/scale";
import { values } from "../../assets/constants/values";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { IPayment } from "../../types/CheckoutTypes";
import { useDispatch } from "react-redux";
import {
  addPaymentCard,
  setSelectedPaymentCard,
} from "../../redux/slices/checkoutSlice";
import FunctionUtils from "../../Utils/FunctionUtils";

type AddCardScreenNavType = StackNavigationProp<
  RootStackParamList,
  "AddCardScreen"
>;

const AddCardScreen = () => {
  const navigation = useNavigation<AddCardScreenNavType>();
  const dispatch = useDispatch();
  const [cardNum, setCardNum] = useState<string>();
  const [cardNumberError, setCardNumberError] = useState<string>("");
  const [cvvError, setCvvError] = useState<string>("");
  const [expDateErr, setExpDateErr] = useState<string>("");
  const [cvv, setCvv] = useState<string>();
  const [exp, setExp] = useState("");
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      cardNum &&
      cvv &&
      exp != "" &&
      name != "" &&
      !cvvError &&
      !cardNumberError &&
      !expDateErr
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [cardNum, cvv, exp, name]);

  const saveCard = (payment: IPayment) => {
    dispatch(addPaymentCard(payment));
    FunctionUtils.showToast("Card added successfully");
    navigation.navigate("CheckoutScreen");
  };

  const onExDateChange = (value: string) => {
    if (value.length === 1 && value !== "0" && value !== "1") {
      value = "0" + value;
    }

    if (value.length >= 2 && value[2] !== "/" && value.length > exp.length) {
      const front = value.slice(0, 2);
      const back = value.slice(2, value.length);

      setExp(front + "/" + back);
    } else {
      setExp(value);
    }

    if (exp.length === 0) {
      setExpDateErr("Please enter date in mm/yyyy form");
    } else {
      setExpDateErr("");
    }
  };

  const onCardNumberChange = (value) => {
    let formattedText = value?.split(" ").join("");
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp(".{1,4}", "g")).join("  ");
    }

    setCardNum(formattedText);
    if (formattedText?.length < 22) {
      setCardNumberError("Enter valid card number");
    } else {
      setCardNumberError("");
    }
  };

  const onCvvChange = (value) => {
    setCvv(value);
    if (value?.length < 3) {
      setCvvError("Enter valid Cvc");
    } else {
      setCvvError("");
    }
  };

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor={colours.white} barStyle="dark-content" />
      <Header
        leftIcon={{
          name: "arrow-left",
          bgColor: colours.gray[300],
          onPress: () => navigation.goBack(),
        }}
        headingTitle="Add Card"
      />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"handled"}
        enableResetScrollToCoords={false}
        bounces={false}
      >
        <View style={[styles.txtInputBox, { marginTop: moderateScale(20) }]}>
          <NoScaleTextInput
            style={[styles.txtInput]}
            // autoCapitalize="none"
            onChangeText={(text) => onCardNumberChange(text)}
            value={cardNum}
            placeholder="Card Number"
            placeholderTextColor={colours.gray[600]}
            keyboardType="numeric"
          />
        </View>
        {cardNumberError && (
          <NoScaleText style={styles.errTxt}>{cardNumberError}</NoScaleText>
        )}
        <View style={[styles.txtInputBox, { marginTop: moderateScale(20) }]}>
          <NoScaleTextInput
            style={[styles.txtInput]}
            // autoCapitalize="none"
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Cardholder Name"
            placeholderTextColor={colours.gray[600]}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[
              styles.txtInputBox,
              {
                width: values.deviceWidth / 2 - moderateScale(20),
                marginRight: moderateScale(5),
              },
            ]}
          >
            <NoScaleTextInput
              style={[styles.txtInput]}
              // autoCapitalize="none"
              onChangeText={(text) => onCvvChange(text)}
              value={cvv}
              placeholder="CVV"
              placeholderTextColor={colours.gray[600]}
              keyboardType="numeric"
              maxLength={7}
            />
          </View>

          <View
            style={[
              styles.txtInputBox,
              {
                width: values.deviceWidth / 2 - moderateScale(20),
                marginLeft: moderateScale(5),
              },
            ]}
          >
            <NoScaleTextInput
              style={[styles.txtInput]}
              // autoCapitalize="none"
              onChangeText={(text) => onExDateChange(text)}
              value={exp}
              placeholder="Exp(mm/yyyy)"
              placeholderTextColor={colours.gray[600]}
              keyboardType="numeric"
              maxLength={7}
            />
          </View>
        </View>
        <View style={styles.errViewRow}>
          <View style={styles.halfWidthView}>
            {cvvError && (
              <NoScaleText style={styles.errTxt}>{cvvError}</NoScaleText>
            )}
          </View>
          <View style={styles.halfWidthView}>
            {expDateErr && (
              <NoScaleText numberOfLines={2} style={styles.errTxt}>
                {expDateErr}
              </NoScaleText>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
      <BottomButton
        disabled={disabled}
        style={{ justifyContent: "center" }}
        onPress={() => {
          dispatch(
            setSelectedPaymentCard({
              cardNumber: cardNum,
              cardPlaceholderName: name,
              ccv: cvv,
              exp: exp,
            })
          );
          saveCard({
            cardNumber: cardNum,
            cardPlaceholderName: name,
            ccv: cvv,
            exp: exp,
          });
        }}
      >
        <NoScaleText style={styles.saveBtnTxt}>Save</NoScaleText>
      </BottomButton>
    </View>
  );
};

export default AddCardScreen;
