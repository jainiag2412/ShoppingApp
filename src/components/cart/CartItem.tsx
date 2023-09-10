import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import NoScaleText from "../common/NoScaleText";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";
import { fonts, values } from "../../assets/constants/values";
import { ICartItemDetail } from "../../types/CartTypes";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increateQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

type CartScreenNavType = StackNavigationProp<RootStackParamList, "CartScreen">;

function CartItem({ item, index }: { item: ICartItemDetail; index: number }) {
  const navigation = useNavigation<CartScreenNavType>();
  const dispatch = useDispatch();

  const decreaseQuantityPress = (index: number, quantity: number) => {
    if (quantity === 1) {
      Alert.alert(
        "Cart",
        "Are you sure you want to remove this item?", // <- this part is optional, you can pass an empty string
        [
          { text: "Ok", onPress: () => dispatch(removeFromCart(index)) },
          { text: "Cancel", onPress: () => console.log("") },
        ],

        { cancelable: true }
      );
    } else {
      dispatch(decreaseQuantity(index));
    }
  };
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetail", { productId: item.id })
      }
    >
      <View style={styles.cartMainView}>
        <View style={styles.rowCenter}>
          <Image
            style={styles.cartProductImg}
            source={{
              uri: item.images[0],
            }}
          />
          <View>
            <NoScaleText style={styles.cartItemTxt}>{item.name}</NoScaleText>
            <View style={{ flexDirection: "row" }}>
              <NoScaleText style={styles.cartItemTxt}>
                Color:{" "}
                <NoScaleText style={styles.cartItemVal}>
                  {item.color}
                </NoScaleText>
              </NoScaleText>
              <NoScaleText
                style={[styles.cartItemTxt, { marginLeft: moderateScale(10) }]}
              >
                Size:{" "}
                <NoScaleText style={styles.cartItemVal}>
                  {item.size}
                </NoScaleText>
              </NoScaleText>
            </View>
          </View>
        </View>
        <View style={styles.priceQuantityMain}>
          <NoScaleText
            style={[
              styles.cartItemTxt,
              { marginHorizontal: moderateScale(10), fontWeight: "600" },
            ]}
          >
            ${item.price}
          </NoScaleText>
          <View style={styles.quantityMain}>
            <TouchableOpacity onPress={() => dispatch(increateQuantity(index))}>
              <View style={[styles.updateQuantityView]}>
                <Icon
                  name={"plus"}
                  size={fonts.smallFont}
                  color={colours.white}
                />
              </View>
            </TouchableOpacity>

            <NoScaleText>{item.quantity}</NoScaleText>
            <TouchableOpacity
              onPress={() => decreaseQuantityPress(index, item.quantity)}
            >
              <View style={[styles.updateQuantityView]}>
                <Icon
                  name={"minus"}
                  size={fonts.smallFont}
                  color={colours.white}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CartItem;

const styles = StyleSheet.create({
  cartMainView: {
    height: moderateScale(100),
    width: values.deviceWidth - moderateScale(30),
    backgroundColor: colours.gray[200],
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: moderateScale(15),
    borderRadius: moderateScale(10),
    flexDirection: "row",
  },
  cartProductImg: {
    width: moderateScale(90),
    height: moderateScale(90),
    resizeMode: "contain",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  updateQuantityView: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
    backgroundColor: colours.purple,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: moderateScale(5),
  },
  cartItemTxt: {
    fontSize: fonts.smallFont + 2,
    color: colours.black,
    paddingVertical: moderateScale(5),
  },
  priceQuantityMain: {
    alignItems: "flex-end",
  },
  quantityMain: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartItemVal: {
    fontSize: fonts.smallFont + 2,
    paddingVertical: moderateScale(5),
    fontWeight: "900",
    color: colours.orange,
  },
});
