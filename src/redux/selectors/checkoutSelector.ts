import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const addresses = (state: RootState) => state.checkout.addresses;
const payments = (state: RootState) => state.checkout.payments;
const selectedAddress = (state: RootState) => state.checkout.selectedAddress;
const selectedPayment = (state: RootState) =>
  state.checkout.selectedPaymentCard;

export const getSavedAddresses = createSelector(
  [addresses],
  (addresses) => addresses
);

export const getSavedPaymentCards = createSelector(
  [payments],
  (payments) => payments
);

export const getSelectedAddress = createSelector(
  [selectedAddress],
  (selectedAddress) => selectedAddress
);

export const getSelectedPaymentCard = createSelector(
  [selectedPayment],
  (selectedPayment) => selectedPayment
);
