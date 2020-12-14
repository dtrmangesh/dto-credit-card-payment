import { CreditCardActionTypes } from "../actions/payment.actions";
import { Action, createFeatureSelector } from "@ngrx/store";
import { IActionStore, ICreditCardState } from "src/app/app.interfaces";
export const selectEvent = createFeatureSelector<any>("creditCardPayment");

const initialState: ICreditCardState = {
  creditCardDetails: [],
  error: "",
};
export function getCreditCardDetails(
  state: ICreditCardState = initialState,
  action: IActionStore
) {
  switch (action.type) {
    case CreditCardActionTypes.ADD_CREDIT_CARD_SUCCESS:
      return {
        ...state,
        error: "",
        creditCardDetails: [...state.creditCardDetails, action.payload.payload],
      };
    case CreditCardActionTypes.ADD_CREDIT_CARD_FAILURE:
      return {
        ...state,
        creditCardDetails: [...state.creditCardDetails],
        error: action.payload.error,
      };
    default:
      return state;
  }
}
