import { StyleSheet } from "react-native";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import { fonts } from "../../assets/constants/values";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
    paddingHorizontal: moderateScale(15),
  },
  flexCenter: {
    alignItems: "center",
    flex: 1,
  },

  bottomTotalCostMain: {
    position: "absolute",
    bottom: moderateScale(100),
    width: "100%",
  },
  totalTxtBtn: {
    fontWeight: "600",
    color: colours.white,
    fontSize: fonts.inputFont,
  },
  placeOrderTxt: {
    color: colours.white,
    fontSize: fonts.inputFont,
  },
});
