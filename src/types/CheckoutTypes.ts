export interface IAddress {
  state: string;
  city: string;
  street: string;
  zipcode: string;
}

export interface IPayment {
  cardNumber: string;
  cardPlaceholderName: string;
  ccv: string;
  exp: string;
}
