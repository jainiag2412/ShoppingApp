import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import { fonts, values } from "../../assets/constants/values";
import NoScaleText from "../common/NoScaleText";

interface IShippingPayment {
  name: string;
  value: string;
}
export const ShippingPaymentBox: React.FC<IShippingPayment> = (
  props: IShippingPayment
) => {
  return (
    <View style={styles.shippingBox}>
      <View style={styles.shippingRowContent}>
        <View>
          <NoScaleText style={styles.shippingAddTxt}>{props.name}</NoScaleText>
          <NoScaleText style={styles.shippingAddVal}>{props.value}</NoScaleText>
        </View>
        <Icon
          name={"chevron-right"}
          size={fonts.smallFont}
          color={colours.black}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shippingBox: {
    height: moderateScale(90),
    width: values.deviceWidth - moderateScale(30),
    backgroundColor: colours.gray[100],
    borderRadius: moderateScale(15),
    justifyContent: "center",
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(15),
  },
  shippingRowContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shippingAddTxt: {
    marginVertical: 2,
    color: colours.gray[500],
    fontSize: fonts.smallFont,
  },
  shippingAddVal: {
    marginVertical: 2,
    color: colours.black,
    fontSize: fonts.inputFont,
  },
});
