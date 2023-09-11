import React from "react";
import { View, TouchableOpacity } from "react-native";
import colours from "../../assets/constants/colours";
import Statusbar from "../../components/common/Statusbar";
import { RootStackParamList } from "../../types/NavigationTypes";
import { styles } from "./CheckoutScreen-style";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/common/Header";
import BottomButton from "../../components/common/BottomButton";
import NoScaleText from "../../components/common/NoScaleText";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/selectors/cartSelector";
import TotalCost from "../../components/cart/TotalCost";
import { ShippingPaymentBox } from "../../components/checkout/ShippingPaymentAddBox";
import {
  getSavedAddresses,
  getSavedPaymentCards,
  getSelectedAddress,
  getSelectedPaymentCard,
} from "../../redux/selectors/checkoutSelector";

type CheckoutScreenNavType = StackNavigationProp<
  RootStackParamList,
  "CheckoutScreen"
>;

const CheckoutScreen = () => {
  const navigation = useNavigation<CheckoutScreenNavType>();
  const cartSubTotal = useSelector(getTotalPrice);
  const savedAddresses = useSelector(getSavedAddresses);
  const savedPaymentCards = useSelector(getSavedPaymentCards);
  const selectedAddress = useSelector(getSelectedAddress);
  const selectedPaymentCard = useSelector(getSelectedPaymentCard);

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor={colours.white} barStyle="dark-content" />
      <Header
        leftIcon={{
          name: "arrow-left",
          bgColor: colours.gray[300],
          onPress: () => navigation.goBack(),
        }}
        headingTitle="Checkout"
      />
      <View style={styles.flexCenter}>
        <TouchableOpacity
          onPress={() =>
            savedAddresses.length == 0
              ? navigation.navigate("AddShippingAddress")
              : navigation.navigate("SavedAddressScreen")
          }
        >
          <ShippingPaymentBox
            name={"Shipping Address"}
            value={
              selectedAddress
                ? selectedAddress.street +
                  "," +
                  selectedAddress.city +
                  "\n" +
                  selectedAddress.zipcode
                : "Add Shipping Address"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            savedPaymentCards.length == 0
              ? navigation.navigate("AddCardScreen")
              : navigation.navigate("PaymentScreen")
          }
        >
          <ShippingPaymentBox
            name={"Payment"}
            value={
              selectedPaymentCard
                ? selectedPaymentCard.cardNumber
                : "Add Payment Method"
            }
          />
        </TouchableOpacity>
        <View style={styles.bottomTotalCostMain}>
          <TotalCost cartSubTotal={cartSubTotal} />
        </View>
      </View>

      <BottomButton
        disabled={selectedAddress && selectedPaymentCard ? false : true}
        style={{ justifyContent: "space-between" }}
        onPress={() => navigation.navigate("OrderConfirmation")}
      >
        <NoScaleText style={styles.totalTxtBtn}>
          ${cartSubTotal.totalPrice}
        </NoScaleText>
        <NoScaleText style={styles.placeOrderTxt}>{"Place Order"}</NoScaleText>
      </BottomButton>
    </View>
  );
};

export default CheckoutScreen;
