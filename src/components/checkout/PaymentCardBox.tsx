import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import { fonts, values } from "../../assets/constants/values";
import NoScaleText from "../common/NoScaleText";
import { IPayment } from "../../types/CheckoutTypes";

interface IPaymentCard {
  item: IPayment;
  onPress: (item: IPayment) => void;
}
export const PaymentCardBox: React.FC<IPaymentCard> = (props: IPaymentCard) => {
  return (
    <TouchableOpacity onPress={() => props.onPress(props.item)}>
      <View style={styles.paymentCardBoxView}>
        <View style={styles.paymentCardContent}>
          <NoScaleText style={styles.cardNumTxt}>
            {props.item.cardNumber}
          </NoScaleText>

          {/* <Icon name={"check"} size={moderateScale(15)} color={colours.black} /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  paymentCardBoxView: {
    height: moderateScale(70),
    width: values.deviceWidth - moderateScale(30),
    backgroundColor: colours.gray[100],
    borderRadius: moderateScale(15),
    justifyContent: "center",
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(15),
  },
  paymentCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNumTxt: {
    marginVertical: 2,
    color: colours.black,
    fontSize: fonts.smallFont,
  },
  shippingAddVal: {
    marginVertical: 2,
    color: colours.black,
    fontSize: fonts.inputFont,
  },
});
