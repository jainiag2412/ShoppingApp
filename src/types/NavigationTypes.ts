import { StackScreenProps } from "@react-navigation/stack";

export type Screens = [
  "HomeScreen",
  "ProfileScreen",
  "ProductDetail",
  "CartScreen",
  "CheckoutScreen",
  "OrderConfirmation",
  "AddShippingAddress",
  "PaymentScreen",
  "AddCardScreen",
  "SavedAddressScreen",
];

export type ScreenName = Screens[number];
export type EmptyParamScreensName = Exclude<ScreenName, keyof RootStackParams>;

type RootStackParams = {
  ProductDetail: {
    productId: number;
  };
};

export type RootStackParamList = RootStackParams & {
  [screen in Exclude<ScreenName, keyof RootStackParams>]: undefined;
};

export type RouteName = keyof RootStackParamList;

export type RootStackScreenProps<T extends ScreenName> = StackScreenProps<
  RootStackParamList,
  T
>;
