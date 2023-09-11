import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/common/Header";
import colours from "../../assets/constants/colours";
import Statusbar from "../../components/common/Statusbar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";
import { styles } from "./CartScreen-style";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  getTotalPrice,
} from "../../redux/selectors/cartSelector";
import CartItem from "../../components/cart/CartItem";
import NoScaleText from "../../components/common/NoScaleText";
import BottomButton from "../../components/common/BottomButton";
import { NoScaleTextInput } from "../../components/common/NoScaleTextInput";
import { fonts } from "../../assets/constants/values";
import TotalCost from "../../components/cart/TotalCost";
import EmptyCart from "../../components/cart/EmptyCart";
import { removeAllFromCart } from "../../redux/slices/cartSlice";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type CartScreenNavType = StackNavigationProp<RootStackParamList, "CartScreen">;

const CartScreen = () => {
  const navigation = useNavigation<CartScreenNavType>();
  const dispatch = useDispatch();
  const [responseComes, setResponseComes] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [coupanCode, setCoupanCode] = useState("");
  const cartProductsData = useSelector(getCartItems);
  const cartSubTotal = useSelector(getTotalPrice);

  useEffect(() => {
    setCartData(cartProductsData);
    setResponseComes(true);
  });

  const removeAllProductsFromCart = () => {
    Alert.alert(
      "Cart",
      "Are you sure you want to remove all items from this cart?", // <- this part is optional, you can pass an empty string
      [
        { text: "Ok", onPress: () => dispatch(removeAllFromCart()) },
        { text: "Cancel", onPress: () => console.log("") },
      ],

      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor={colours.white} barStyle="dark-content" />
      <Header
        leftIcon={{
          name: "arrow-left",
          bgColor: colours.gray[300],
          onPress: () => navigation.goBack(),
        }}
        headingTitle="Cart"
      />
      {responseComes == true && cartData.length == 0 ? (
        <EmptyCart />
      ) : (
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={"handled"}
          enableResetScrollToCoords={false}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity onPress={removeAllProductsFromCart}>
            <NoScaleText style={styles.removeAllTxt}>Remove All</NoScaleText>
          </TouchableOpacity>
          <FlatList
            data={cartData}
            renderItem={({ item, index }) => (
              <CartItem item={item} index={index} />
            )}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            style={styles.flatLst}
          />
          <View style={styles.subtotalMain}>
            <TotalCost cartSubTotal={cartSubTotal} />
            <View style={styles.searchView}>
              <NoScaleTextInput
                style={[styles.txtInput]}
                // autoCapitalize="none"
                onChangeText={(text) => setCoupanCode(text)}
                value={coupanCode}
                placeholder="Enter Coupan code..."
                placeholderTextColor={colours.gray[600]}
              />
              <View style={[styles.coupanRightArrowView]}>
                <Icon
                  name={"chevron-right"}
                  size={fonts.smallFont}
                  color={colours.white}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
      {responseComes == true && cartData.length > 0 && (
        <BottomButton
          disabled={false}
          style={{ justifyContent: "center" }}
          onPress={() => navigation.navigate("CheckoutScreen")}
        >
          <NoScaleText style={styles.checkOutBtnTxt}>Checkout</NoScaleText>
        </BottomButton>
      )}
    </View>
  );
};

export default CartScreen;
