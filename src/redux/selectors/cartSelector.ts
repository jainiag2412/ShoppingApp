import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { shipppingFee } from "../../Utils/Constants";

const cartItems = (state: RootState) => state.cart.cartItems;

const products = (state: RootState) => state.product.products;

export const getCartItems = createSelector(
  [cartItems, products],
  (cartItems, products) => {
    return cartItems.map((item) => {
      let totalPrice = 0;
      const product = products.find((product) => product.id === item.productID);
      const productVariant = product.variants.find(
        (variant) => variant.id === item.variationID
      );
      totalPrice = totalPrice + productVariant.price;
      return {
        id: product.id,
        variant: productVariant.id,
        name: product.name,
        images: productVariant.images,
        price: productVariant.price,
        size: productVariant.size,
        color: productVariant.color,
        quantity: item.quantity,
        totalPrice: totalPrice,
      };
    });
  }
);
export const isProductVariationInCart = (
  productId: number,
  variationId: number
) =>
  createSelector([cartItems], (cartItems) =>
    cartItems.find(
      (cartItem) =>
        cartItem.productID === productId && cartItem.variationID === variationId
    )
  );

export const getTotalPrice = createSelector(
  [cartItems, products],
  (cartItems, products) => {
    let totalPrice = 0;
    cartItems.map((item) => {
      const product = products.find((product) => product.id === item.productID);
      const productVariant = product.variants.find(
        (variant) => variant.id === item.variationID
      );
      totalPrice = totalPrice + productVariant.price * item.quantity;
    });
    return { subTotal: totalPrice, totalPrice: totalPrice + shipppingFee };
  }
);

export const getCartCount = createSelector([cartItems], (cartItems) => {
  let totalCartItems = 0;
  cartItems.map((item) => {
    totalCartItems = totalCartItems + item.quantity;
  });
  return totalCartItems;
});
