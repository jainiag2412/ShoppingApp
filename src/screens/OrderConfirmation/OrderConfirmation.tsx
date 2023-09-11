import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colours from "../../assets/constants/colours";
import Statusbar from "../../components/common/Statusbar";
import { RootStackParamList } from "../../types/NavigationTypes";
import { styles } from "./OrdderConfirmation-style";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "../../assets/constants/scale";
import NoScaleText from "../../components/common/NoScaleText";
import { useDispatch } from "react-redux";
import { removeAllFromCart } from "../../redux/slices/cartSlice";

type OrderConfirmationNavType = StackNavigationProp<
  RootStackParamList,
  "OrderConfirmation"
>;

const OrderConfirmation = () => {
  const navigation = useNavigation<OrderConfirmationNavType>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeAllFromCart());
  }, []);

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor={colours.purple} barStyle="dark-content" />
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Icon name={"check"} size={moderateScale(100)} color={colours.white} />
        <NoScaleText style={styles.emptyCartTxt}>
          Your order placed successfully
        </NoScaleText>
        <TouchableOpacity
          style={styles.exploreProductsView}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <NoScaleText style={styles.exploreProductsTxt}>
            Explore Other Products
          </NoScaleText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderConfirmation;
