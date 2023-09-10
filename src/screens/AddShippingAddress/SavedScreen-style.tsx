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
  saveBtnTxt: {
    color: colours.white,
    fontWeight: "600",
    fontSize: fonts.inputFont,
  },
  flatLst: {
    flex: 1,
    marginBottom: moderateScale(50),
  },
  chooseAddressHeading: {
    fontSize: fonts.inputFont,
    fontWeight: "600",
    marginTop: moderateScale(15),
    marginBottom: moderateScale(5),
  },
});
