import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { fonts, values } from "../../assets/constants/values";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import NoScaleText from "../common/NoScaleText";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";

type CartScreenNavType = StackNavigationProp<RootStackParamList, "CartScreen">;

const EmptyCart = () => {
  const navigation = useNavigation<CartScreenNavType>();
  return (
    <View style={styles.mainView}>
      <Icon
        name={"shopping-cart"}
        size={moderateScale(100)}
        color={colours.purple}
      />
      <NoScaleText style={styles.emptyCartTxt}>Your cart is empty</NoScaleText>
      <TouchableOpacity
        style={styles.exploreProductsView}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <NoScaleText style={styles.exploreProductsTxt}>
          Explore Products
        </NoScaleText>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  exploreProductsView: {
    height: moderateScale(50),
    width: values.deviceWidth / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.purple,
    marginTop: moderateScale(10),
    borderRadius: moderateScale(25),
  },
  exploreProductsTxt: {
    color: colours.white,
    fontSize: fonts.inputFont,
  },
  emptyCartTxt: {
    fontWeight: "600",
    fontSize: fonts.mediumSmallFont,
    marginVertical: moderateScale(5),
  },
});
