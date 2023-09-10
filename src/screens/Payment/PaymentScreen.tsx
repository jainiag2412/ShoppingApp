import React from "react";
import { FlatList, View } from "react-native";
import colours from "../../assets/constants/colours";
import Statusbar from "../../components/common/Statusbar";
import { RootStackParamList } from "../../types/NavigationTypes";
import { styles } from "./PaymentScreen-style";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/common/Header";
import NoScaleText from "../../components/common/NoScaleText";
import BottomButton from "../../components/common/BottomButton";
import { useDispatch, useSelector } from "react-redux";
import { getSavedPaymentCards } from "../../redux/selectors/checkoutSelector";
import { PaymentCardBox } from "../../components/checkout/PaymentCardBox";
import { IPayment } from "../../types/CheckoutTypes";
import { setSelectedPaymentCard } from "../../redux/slices/checkoutSlice";
import { moderateScale } from "../../assets/constants/scale";

type PaymentScreenNavType = StackNavigationProp<
  RootStackParamList,
  "PaymentScreen"
>;

const PaymentScreen = () => {
  const navigation = useNavigation<PaymentScreenNavType>();
  const savedPaymentCards = useSelector(getSavedPaymentCards);
  const dispatch = useDispatch();

  const handlePaymentCardSelect = (item: IPayment) => {
    dispatch(setSelectedPaymentCard(item));
    navigation.goBack();
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
        headingTitle="Payment"
      />
      <NoScaleText style={styles.chooseCardHeading}>Select Card:</NoScaleText>
      <FlatList
        data={savedPaymentCards}
        renderItem={({ item }) => (
          <PaymentCardBox
            onPress={(item) => handlePaymentCardSelect(item)}
            item={item}
          />
        )}
        style={{ marginBottom: moderateScale(100) }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      <BottomButton
        disabled={false}
        style={{ justifyContent: "center" }}
        onPress={() => navigation.navigate("AddCardScreen")}
      >
        <NoScaleText style={styles.saveBtnTxt}>Add New Card</NoScaleText>
      </BottomButton>
    </View>
  );
};

export default PaymentScreen;
