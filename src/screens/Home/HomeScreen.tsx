import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/common/Header";
import colours from "../../assets/constants/colours";
import Statusbar from "../../components/common/Statusbar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";
import { moderateScale } from "../../assets/constants/scale";
import { fonts } from "../../assets/constants/values";
import { NoScaleTextInput } from "../../components/common/NoScaleTextInput";
import { styles } from "./HomeScreen-style";
import ProductItem from "../../components/product/ProductItem";
import { useAppDispatch } from "../../redux/hooks";
import { setProducts } from "../../redux/slices/productSlice";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { getProducts } from "../../redux/selectors/productSelector";
import NoResultsFound from "../../components/common/NoResultsFound";

type HomeScreenNavType = StackNavigationProp<RootStackParamList, "HomeScreen">;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavType>();
  const [searchTxt, setSearchTxt] = useState("");
  const [responseComes, setResponseComes] = useState(false);

  const products = useSelector(getProducts);
  const dispatch = useAppDispatch();

  const [filteredDataSource, setFilteredDataSource] = useState(products);
  const [mainProductData, setMainProductData] = useState(products);

  const {
    data: productData,
    loading,
    error,
  } = useFetch(
    "https://shoppingapi.s3.ap-southeast-2.amazonaws.com/data4.json"
  );
  useEffect(() => {
    if (!loading && !error && productData) {
      dispatch(setProducts(productData));
      setResponseComes(true);
    }
  }, [productData, loading, error]);

  useEffect(() => {
    setFilteredDataSource(products);
    setMainProductData(productData);
  }, [products]);

  const constsearchProduct = (text) => {
    if (text) {
      const newData = mainProductData.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearchTxt(text);
    } else {
      setFilteredDataSource(mainProductData);
      setSearchTxt(text);
    }
  };

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor={colours.white} barStyle="dark-content" />
      <Header
        leftIcon={{
          name: "user",
          bgColor: colours.gray[300],
          onPress: () => navigation.navigate("ProfileScreen"),
        }}
        rightIcon={{
          name: "shopping-cart",
          bgColor: colours.purple,
          onPress: () => navigation.navigate("CartScreen"),
        }}
      />
      <View style={styles.searchView}>
        <Icon
          name={"search"}
          size={fonts.mediumSmallFont}
          color={colours.black}
          style={{ marginHorizontal: moderateScale(10) }}
        />
        <NoScaleTextInput
          style={[styles.txtInput]}
          // autoCapitalize="none"
          onChangeText={(text) => constsearchProduct(text)}
          value={searchTxt}
          placeholder="Search.."
          placeholderTextColor={colours.black}
        />
      </View>
      <FlatList
        data={filteredDataSource}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.flatLst}
        numColumns={2}
        ListEmptyComponent={() => {
          return responseComes ? (
            <NoResultsFound
              icon={"search"}
              noDataTxt="Sorry, We couldn't find any matching result for your search."
            />
          ) : (
            <ActivityIndicator size={"small"} color={colours.purple} />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
