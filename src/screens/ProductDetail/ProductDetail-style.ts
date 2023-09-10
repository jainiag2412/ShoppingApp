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

  optionMainView: {
    height: values.deviceHeight * 0.3,
    width: values.deviceWidth / 2 - moderateScale(20),
    borderRadius: 5,
    backgroundColor: colours.gray[100],
    margin: 3,
    marginVertical: moderateScale(15),
  },

  productImg: {
    height: values.deviceHeight * 0.3,
    width: values.deviceWidth / 2 - moderateScale(20),
    resizeMode: "cover",
    borderRadius: 5,
  },
  productDetailTxt: {
    marginHorizontal: moderateScale(10),
    marginVertical: 5,
    fontWeight: "700",
  },
  addtoCartView: {
    position: "absolute",
    height: moderateScale(50),
    width: values.deviceWidth - moderateScale(30),
    borderRadius: moderateScale(25),
    backgroundColor: colours.purple,
    alignItems: "center",
    justifyContent: "space-between",
    bottom: moderateScale(25),
    marginHorizontal: moderateScale(15),
    flexDirection: "row",
    paddingHorizontal: moderateScale(20),
  },
  addToCartTxt: {
    color: colours.white,
    fontSize: fonts.mediumSmallFont,
    fontWeight: "600",
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
  updateQuantityView: {
    height: moderateScale(38),
    width: moderateScale(38),
    borderRadius: moderateScale(19),
    backgroundColor: colours.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityTxt: {
    marginHorizontal: moderateScale(15),
    fontWeight: "500",
  },
});
