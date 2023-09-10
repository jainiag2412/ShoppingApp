import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, View, Image } from "react-native";
import Header from "../../components/common/Header";
import colours from "../../assets/constants/colours";
import Statusbar from "../../components/common/Statusbar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  RootStackParamList,
  RootStackScreenProps,
} from "../../types/NavigationTypes";
import { styles } from "./ProductDetail-style";
import { moderateScale } from "../../assets/constants/scale";
import NoScaleText from "../../components/common/NoScaleText";
import { values } from "../../assets/constants/values";
import { useAppDispatch } from "../../redux/hooks";
import { IVariants } from "../../types/ProductTypes";
import { useSelector } from "react-redux";
import { getProductDetail } from "../../redux/selectors/productSelector";
import { addToCart } from "../../redux/slices/cartSlice";
import { isProductVariationInCart } from "../../redux/selectors/cartSelector";
import CategoryBottomModal from "../../components/product/CategoryBottomModal";
import { ProductAttributeSelector } from "../../components/product/ProductAttributeSelector";
import BottomButton from "../../components/common/BottomButton";
import FunctionUtils from "../../Utils/FunctionUtils";

type ProductDetailNavType = StackNavigationProp<
  RootStackParamList,
  "ProductDetail"
>;

type AttributeTypes = "COLOR" | "SIZE";

const ProductDetail = (props: RootStackScreenProps<"ProductDetail">) => {
  const navigation = useNavigation<ProductDetailNavType>();
  const dispatch = useAppDispatch();
  const [attributeModalVisible, setAttributeModalVisible] = useState(false);
  const [attributeType, setAttributeType] = useState<AttributeTypes>();

  const productId = props.route.params.productId;
  const [selectedVariant, setSelectedVariant] = useState<IVariants>();
  const productDetail = useSelector(getProductDetail(productId));
  console.log("product detail:==", productDetail);
  const [selectedColor, setSelectedColor] = useState(
    productDetail?.variants[0].color
  );
  const [selectedSize, setSelectedSize] = useState(
    productDetail?.variants[0].size
  );

  const isAddedToCart = useSelector(
    isProductVariationInCart(productId, selectedVariant?.id)
  );

  const attributeValues = useMemo(() => {
    if (attributeType === "COLOR") {
      return productDetail.variants
        .filter((variant) => variant.size === selectedSize)
        .map((variant) => variant.color)
        .filter(
          (value, index, attributes) => attributes.indexOf(value) === index
        );
    } else if (attributeType === "SIZE") {
      return productDetail.variants
        .filter((variant) => variant.color === selectedColor)
        .map((variant) => variant.size)
        .filter(
          (value, index, attributes) => attributes.indexOf(value) === index
        );
    } else {
      return [];
    }
  }, [attributeType, selectedColor, selectedSize]);

  useEffect(() => {
    setSelectedVariant(productDetail?.variants[0]);
  }, [productDetail]);

  useEffect(() => {
    const variant = productDetail.variants.find(
      (item) => item.color === selectedColor && item.size === selectedSize
    );

    if (variant) {
      setSelectedVariant(variant);
    } else {
      setSelectedVariant(productDetail.variants[0]);
    }
  }, [selectedColor, selectedSize]);

  const renderSizeSelection = () => {
    return (
      <ProductAttributeSelector
        name={"size"}
        onPress={() => {
          setAttributeModalVisible(true);
          setAttributeType("SIZE");
        }}
        icon={"chevron-down"}
        displayValue={
          <NoScaleText style={styles.sizeTxt}>{selectedSize}</NoScaleText>
        }
      />
    );
  };

  const renderColorSelection = () => {
    return (
      <ProductAttributeSelector
        name={"color"}
        icon={"chevron-down"}
        onPress={() => {
          setAttributeModalVisible(true);
          setAttributeType("COLOR");
        }}
        displayValue={
          <View
            style={[
              styles.selectedColorView,
              { backgroundColor: selectedColor },
            ]}
          ></View>
        }
      />
    );
  };

  const addToCartPress = () => {
    dispatch(
      addToCart({
        productID: productId,
        variationID: selectedVariant.id,
        quantity: 1,
      })
    );
    FunctionUtils.showToast("Product added to cart successfully");
  };

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor={colours.white} barStyle="dark-content" />
      <CategoryBottomModal
        visible={attributeModalVisible}
        setModalVisible={setAttributeModalVisible}
        attributeValues={attributeValues}
        attributeType={attributeType}
        selectedAttribute={
          attributeType === "COLOR" ? selectedColor : selectedSize
        }
        onSelectAttribute={(value) => {
          attributeType === "COLOR"
            ? setSelectedColor(value)
            : setSelectedSize(value);
        }}
      />
      <Header
        leftIcon={{
          name: "arrow-left",
          bgColor: colours.gray[300],
          onPress: () => navigation.goBack(),
        }}
        rightIcon={{
          name: "shopping-cart",
          bgColor: colours.purple,
          onPress: () => navigation.navigate("CartScreen"),
        }}
      />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ height: values.deviceHeight * 0.3 }}>
          <ScrollView horizontal={true}>
            {selectedVariant?.images.map((productImg, index) => {
              return (
                <View key={index} style={styles.optionMainView}>
                  <Image
                    source={{ uri: productImg }}
                    style={styles.productImg}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>

        <NoScaleText
          style={[
            styles.productDetailTxt,
            { fontSize: moderateScale(15), marginTop: moderateScale(10) },
          ]}
        >
          {productDetail?.name}
        </NoScaleText>
        <NoScaleText
          style={[styles.productDetailTxt, { color: colours.orange }]}
        >
          ${selectedVariant?.price}
        </NoScaleText>
        {renderSizeSelection()}
        {renderColorSelection()}
        <View style={{ height: values.deviceHeight * 0.2 }}>
          <NoScaleText
            style={[
              styles.productDetailTxt,
              {
                fontSize: moderateScale(15),
                marginTop: moderateScale(10),
              },
            ]}
          >
            {productDetail.description}
          </NoScaleText>
        </View>
      </ScrollView>
      <BottomButton
        disabled={isAddedToCart ? true : false}
        style={{
          justifyContent: "space-between",
          backgroundColor: isAddedToCart
            ? colours.purpleOpacity
            : colours.purple,
        }}
        onPress={() => addToCartPress()}
      >
        <NoScaleText style={styles.addToCartTxt}>
          ${productDetail?.variants[0].price}
        </NoScaleText>
        <NoScaleText style={styles.addToCartTxt}>
          {isAddedToCart ? "Added to cart" : "Add to cart"}
        </NoScaleText>
      </BottomButton>
    </View>
  );
};

export default ProductDetail;
