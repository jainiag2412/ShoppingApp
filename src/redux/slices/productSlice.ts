import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProductItem } from "../../types/ProductTypes";

// Define a type for the slice state
interface ProductState {
  products: IProductItem[];
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProductItem[]>) => {
      state.products = [...action.payload];
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
