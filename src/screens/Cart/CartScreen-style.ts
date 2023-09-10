import { StyleSheet } from "react-native";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import { fonts, values } from "../../assets/constants/values";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
    paddingHorizontal: moderateScale(15),
  },
  flatLst: {
    flex: 1,
  },
  removeAllTxt: {
    alignSelf: "flex-end",
    fontWeight: "600",
  },

  checkOutBtnTxt: {
    color: colours.white,
    fontSize: fonts.mediumSmallFont,
    fontWeight: "600",
  },
  subtotalMain: {
    justifyContent: "flex-end",
    marginHorizontal: moderateScale(10),
    marginBottom: moderateScale(100),
    marginTop: moderateScale(20),
  },

  searchView: {
    height: moderateScale(50),
    backgroundColor: colours.gray[200],
    marginTop: moderateScale(15),
    borderRadius: moderateScale(25),
    flexDirection: "row",
    alignItems: "center",
  },
  txtInput: {
    paddingHorizontal: moderateScale(15),
    width: values.deviceWidth - moderateScale(100),
  },
  coupanRightArrowView: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
    backgroundColor: colours.purple,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: moderateScale(5),
  },
});
