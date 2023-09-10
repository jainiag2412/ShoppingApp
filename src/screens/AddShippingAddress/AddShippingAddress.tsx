import React, { useEffect, useState } from "react";
import { View } from "react-native";
import colours from "../../assets/constants/colours";
import Statusbar from "../../components/common/Statusbar";
import { RootStackParamList } from "../../types/NavigationTypes";
import { styles } from "./AddShippingAddress-style";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/common/Header";
import NoScaleText from "../../components/common/NoScaleText";
import BottomButton from "../../components/common/BottomButton";
import { NoScaleTextInput } from "../../components/common/NoScaleTextInput";
import { moderateScale } from "../../assets/constants/scale";
import { values } from "../../assets/constants/values";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import {
  addAddress,
  setSelectedAddress,
} from "../../redux/slices/checkoutSlice";
import { IAddress } from "../../types/CheckoutTypes";
import FunctionUtils from "../../Utils/FunctionUtils";

type AddShippingAddressNavType = StackNavigationProp<
  RootStackParamList,
  "AddShippingAddress"
>;

const AddShippingAddress = () => {
  const navigation = useNavigation<AddShippingAddressNavType>();
  const dispatch = useDispatch();
  const [streetAddress, setStreetAddress] = useState<string>();
  const [state, setState] = useState<string>();
  const [zipCode, setZipCode] = useState<string>();
  const [city, setCity] = useState<string>();
  const [zipCodeError, setZipCodeError] = useState<string>("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      city !== "" &&
      state !== "" &&
      zipCode &&
      streetAddress !== "" &&
      !zipCodeError
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [state, zipCode, streetAddress, city]);

  const saveShippingAddress = (address: IAddress) => {
    dispatch(addAddress(address));
    FunctionUtils.showToast("Address added successfully");
    navigation.navigate("CheckoutScreen");
  };

  const onZipcodeChange = (value) => {
    setZipCode(value);
    if (value?.length < 4) {
      setZipCodeError("Enter valid zipcode");
    } else {
      setZipCodeError("");
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
        headingTitle="Add Address"
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
            onChangeText={(text) => setStreetAddress(text)}
            value={streetAddress}
            placeholder="Street Address"
            placeholderTextColor={colours.gray[600]}
          />
        </View>
        <View style={[styles.txtInputBox, { marginTop: moderateScale(20) }]}>
          <NoScaleTextInput
            style={[styles.txtInput]}
            // autoCapitalize="none"
            onChangeText={(text) => setCity(text)}
            value={city}
            placeholder="City"
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
              onChangeText={(text) => onZipcodeChange(text)}
              value={zipCode}
              placeholder="Zip Code"
              placeholderTextColor={colours.gray[600]}
              keyboardType="numeric"
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
              onChangeText={(text) => setState(text)}
              value={state}
              placeholder="State"
              placeholderTextColor={colours.gray[600]}
            />
          </View>
        </View>
        {zipCodeError && (
          <NoScaleText numberOfLines={2} style={styles.errTxt}>
            {zipCodeError}
          </NoScaleText>
        )}
      </KeyboardAwareScrollView>
      <BottomButton
        disabled={disabled}
        style={{ justifyContent: "center" }}
        onPress={() => {
          dispatch(
            setSelectedAddress({
              state: state,
              city: city,
              zipcode: zipCode,
              street: streetAddress,
            })
          );
          saveShippingAddress({
            state: state,
            city: city,
            zipcode: zipCode,
            street: streetAddress,
          });
        }}
      >
        <NoScaleText style={styles.saveBtnTxt}>Save</NoScaleText>
      </BottomButton>
    </View>
  );
};

export default AddShippingAddress;
