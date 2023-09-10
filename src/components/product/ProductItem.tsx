import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import colours from "../../assets/constants/colours";
import { moderateScale } from "../../assets/constants/scale";
import { styles } from "../../screens/Home/HomeScreen-style";
import { IProductItem } from "../../types/ProductTypes";
import NoScaleText from "../common/NoScaleText";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";

type HomeScreenNavType = StackNavigationProp<RootStackParamList, "HomeScreen">;

function ProductItem({ item }: { item: IProductItem }) {
  const navigation = useNavigation<HomeScreenNavType>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetail", { productId: item.id })
      }
    >
      <View style={styles.optionMainView}>
        <Image
          source={{ uri: item.variants[0].images[0] }}
          style={styles.productImg}
        />
        <NoScaleText
          style={[styles.productDetailTxt, { fontSize: moderateScale(15) }]}
        >
          {item.name}
        </NoScaleText>
        <NoScaleText
          style={[
            styles.productDetailTxt,
            { fontWeight: "700", color: colours.orange },
          ]}
        >
          ${item.variants[0].price}
        </NoScaleText>
      </View>
    </TouchableOpacity>
  );
}

export default ProductItem;
