import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  productID: number;
  variationID: number;
  quantity: number;
}

// Define a type for the slice state
interface CartState {
  cartItems: CartItem[];
}

// Define the initial state using that type
const initialState: CartState = {
  cartItems: [],
};

export const userCartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems.splice(action.payload, 1);
    },
    increateQuantity: (state, action: PayloadAction<number>) => {
      if (!state.cartItems[action.payload].quantity) {
        state.cartItems[action.payload].quantity = 1;
      }
      state.cartItems[action.payload].quantity++;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      if (state.cartItems[action.payload].quantity > 0)
        state.cartItems[action.payload].quantity--;
    },
    removeAllFromCart: (state) => {
      if (state.cartItems.length > 0) state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  increateQuantity,
  decreaseQuantity,
} = userCartSlice.actions;

export default userCartSlice.reducer;
