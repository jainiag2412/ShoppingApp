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
  saveBtnTxt: {
    color: colours.white,
    fontWeight: "600",
    fontSize: fonts.inputFont,
  },
  txtInputBox: {
    width: values.deviceWidth - moderateScale(30),
    borderRadius: moderateScale(10),
    backgroundColor: colours.gray[100],
    height: moderateScale(60),
    padding: moderateScale(10),
    marginTop: moderateScale(10),
  },
  txtInput: {
    flex: 1,
  },
  errViewRow: {
    flexDirection: "row",
    flex: 1,
  },
  halfWidthView: {
    width: "50%",
  },
  errTxt: {
    color: colours.red,
  },
});
