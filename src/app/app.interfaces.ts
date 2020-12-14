import { Action } from "@ngrx/store";

export interface ICreditCardPayment {
  creditCardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  securityCode: number;
  amount: number;
}

export interface ICreditCardState {
  creditCardDetails: [];
  error: string;
}

export interface IActionStore {
  action: Action;
  type: string;
  payload: {
    payload: string;
    error: string;
  };
}
