import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { fonts } from "../../assets/constants/values";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import NoScaleText from "../common/NoScaleText";

type CartTotalAmountProps = {
  cartSubTotal: { subTotal: number; totalPrice: number };
};

const TotalCost: React.FC<PropsWithChildren<CartTotalAmountProps>> = (
  props: CartTotalAmountProps
) => {
  return (
    <View>
      <View style={styles.totalValRowView}>
        <NoScaleText style={styles.keyTxt}>SubTotal</NoScaleText>
        <NoScaleText style={styles.valTxt}>
          ${props.cartSubTotal.subTotal}
        </NoScaleText>
      </View>
      <View style={styles.totalValRowView}>
        <NoScaleText style={styles.keyTxt}>Shipping Cost</NoScaleText>
        <NoScaleText style={styles.valTxt}>${8}</NoScaleText>
      </View>
      <View style={styles.totalValRowView}>
        <NoScaleText style={styles.keyTxt}>Tax</NoScaleText>
        <NoScaleText style={styles.valTxt}>$0.00</NoScaleText>
      </View>
      <View style={styles.totalValRowView}>
        <NoScaleText style={styles.keyTxt}>Total</NoScaleText>
        <NoScaleText style={[styles.valTxt, { fontWeight: "600" }]}>
          ${props.cartSubTotal.totalPrice}
        </NoScaleText>
      </View>
    </View>
  );
};

export default TotalCost;

const styles = StyleSheet.create({
  totalValRowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: moderateScale(5),
  },
  keyTxt: {
    fontSize: fonts.inputFont,
    color: colours.gray[400],
  },
  valTxt: {
    fontSize: fonts.inputFont,
    color: colours.black,
  },
});
