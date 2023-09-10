import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const products = (state: RootState) => state.product.products;

export const getProducts = createSelector([products], (products) => products);
export const getProductDetail = (id: number) =>
  createSelector([products], (products) =>
    products.find((product) => product.id === id)
  );
