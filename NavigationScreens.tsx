import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/NavigationTypes";
import HomeScreen from "./src/screens/Home/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import ProductDetail from "./src/screens/ProductDetail/ProductDetail";
import CartScreen from "./src/screens/Cart/CartScreen";
import CheckoutScreen from "./src/screens/Checkout/CheckoutScreen";
import OrderConfirmation from "./src/screens/OrderConfirmation/OrderConfirmation";
import AddShippingAddress from "./src/screens/AddShippingAddress/AddShippingAddress";
import PaymentScreen from "./src/screens/Payment/PaymentScreen";
import AddCardScreen from "./src/screens/Payment/AddCardScreen";
import SavedAddressScreen from "./src/screens/AddShippingAddress/SavedAddressScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationStack = (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="CheckoutScreen"
      component={CheckoutScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="OrderConfirmation"
      component={OrderConfirmation}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="AddShippingAddress"
      component={AddShippingAddress}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SavedAddressScreen"
      component={SavedAddressScreen}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="PaymentScreen"
      component={PaymentScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="AddCardScreen"
      component={AddCardScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
