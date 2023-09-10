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
  centerView: {
    alignItems: "center",
    flex: 1,
  },
  roundView: {
    height: moderateScale(200),
    width: moderateScale(200),
    backgroundColor: colours.gray[100],
    borderRadius: moderateScale(100),
    alignItems: "center",
    justifyContent: "center",
    marginTop: moderateScale(80),
  },
  userName: {
    marginTop: moderateScale(20),
    fontSize: fonts.mediumSmallFont,
  },
});
