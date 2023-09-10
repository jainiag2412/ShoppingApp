import React, { PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { fonts, values } from "../../assets/constants/values";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";

type ButtonProps = {
  style: object;
  children: React.ReactElement[] | React.ReactElement;
  disabled: boolean;
  onPress: () => void;
};

const BottomButton: React.FC<PropsWithChildren<ButtonProps>> = (
  props: ButtonProps
) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnView,
        {
          backgroundColor: props.disabled
            ? colours.purpleOpacity
            : colours.purple,
          ...props.style,
        },
      ]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  btnView: {
    position: "absolute",
    height: moderateScale(50),
    width: values.deviceWidth - moderateScale(30),
    borderRadius: moderateScale(25),
    backgroundColor: colours.purple,
    alignItems: "center",
    // justifyContent: "space-between",
    bottom: moderateScale(25),
    marginHorizontal: moderateScale(15),
    flexDirection: "row",
    paddingHorizontal: moderateScale(20),
    zIndex: 1,
  },
  btnTxt: {
    color: colours.white,
    fontSize: fonts.mediumSmallFont,
    fontWeight: "600",
  },
});
