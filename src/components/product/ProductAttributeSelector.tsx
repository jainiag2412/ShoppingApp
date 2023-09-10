import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import { fonts, values } from "../../assets/constants/values";
import NoScaleText from "../common/NoScaleText";

interface IProductCategory {
  name: string;
  icon: string;
  onPress: () => void;
  displayValue: JSX.Element;
}
export const ProductAttributeSelector = (
  props: IProductCategory
): JSX.Element => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View
        style={[styles.categorySelectionView, { marginTop: moderateScale(20) }]}
      >
        <NoScaleText style={styles.categoryTxt}>{props.name}</NoScaleText>
        <View style={styles.rowCenterView}>
          {props.displayValue}
          <Icon
            name={props.icon}
            size={fonts.smallFont}
            color={colours.black}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
    borderColor: "red",
  },
  categorySelectionView: {
    height: moderateScale(56),
    width: values.deviceWidth - moderateScale(30),
    backgroundColor: colours.gray[100],
    alignItems: "center",
    borderRadius: moderateScale(27),
    marginVertical: moderateScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(15),
  },
  categoryTxt: {
    fontSize: fonts.smallFont + 2,
    fontWeight: "600",
  },
  sizeTxt: {
    fontWeight: "700",
    fontSize: fonts.smallFont,
    marginHorizontal: moderateScale(15),
  },
  selectedColorView: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
    marginHorizontal: moderateScale(15),
  },
  rowCenterView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
