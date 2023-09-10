import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import { fonts, values } from "../../assets/constants/values";
import NoScaleText from "../common/NoScaleText";
import { IAddress } from "../../types/CheckoutTypes";

interface IShippingAddress {
  onPress: (item: IAddress) => void;
  item: IAddress;
  index: number;
}

export const ShippingAddressBox: React.FC<IShippingAddress> = (
  props: IShippingAddress
) => {
  return (
    <TouchableOpacity onPress={() => props.onPress(props.item)}>
      <View style={styles.shippingBox}>
        <View style={styles.shippingRowContent}>
          <View>
            <NoScaleText style={styles.shippingAddTxt}>
              {props.item.street}, {props.item.city}
            </NoScaleText>

            <NoScaleText style={styles.shippingAddTxt}>
              {props.item.state}, {props.item.zipcode}
            </NoScaleText>
          </View>
          {}
          {/* <Icon name={"check"} size={moderateScale(15)} color={colours.black} /> */}
        </View>
      </View>
    </TouchableOpacity>
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
    color: colours.black,
    fontSize: fonts.smallFont,
  },
  shippingAddVal: {
    marginVertical: 2,
    color: colours.black,
    fontSize: fonts.inputFont,
  },
});
