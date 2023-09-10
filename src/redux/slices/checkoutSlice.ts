import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAddress, IPayment } from "../../types/CheckoutTypes";

// Define a type for the slice state
interface CheckoutState {
  addresses: IAddress[];
  payments: IPayment[];
  selectedAddress?: IAddress;
  selectedPaymentCard?: IPayment;
}

// Define the initial state using that type
const initialState: CheckoutState = {
  addresses: [],
  payments: [],
};

export const checkoutSlice = createSlice({
  name: "checkout",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<IAddress>) => {
      state.addresses = [...state.addresses, action.payload];
    },
    addPaymentCard: (state, action: PayloadAction<IPayment>) => {
      state.payments = [...state.payments, action.payload];
    },
    setSelectedAddress: (state, action: PayloadAction<IAddress>) => {
      state.selectedAddress = action.payload;
    },
    setSelectedPaymentCard: (state, action: PayloadAction<IPayment>) => {
      state.selectedPaymentCard = action.payload;
    },
  },
});

export const {
  addAddress,
  addPaymentCard,
  setSelectedAddress,
  setSelectedPaymentCard,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
