import { StyleSheet } from "react-native";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import { fonts, values } from "../../assets/constants/values";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.purple,
    paddingHorizontal: moderateScale(15),
  },
  exploreProductsView: {
    height: moderateScale(50),
    width: values.deviceWidth / 1.7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.white,
    marginTop: moderateScale(10),
    borderRadius: moderateScale(25),
  },
  exploreProductsTxt: {
    color: colours.black,
    fontSize: fonts.inputFont,
    fontWeight: "600",
  },
  emptyCartTxt: {
    fontWeight: "600",
    fontSize: fonts.mediumSmallFont,
    marginVertical: moderateScale(5),
    color: colours.white,
  },
});
