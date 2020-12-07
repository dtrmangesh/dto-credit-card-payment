import { CreditCardActionTypes } from "../actions/payment.actions";
import { createFeatureSelector } from '@ngrx/store';
export const selectEvent = createFeatureSelector<any>('creditCardPayment');

const initialState: any = {
    creditCardDetails: [],
    error: ''
};
export function getCreditCardDetails(state = initialState ,action:any) {
    switch (action.type) {
        case CreditCardActionTypes.ADD_CREDIT_CARD_SUCCESS:
            return {...state, error: '',  creditCardDetails : [...state.creditCardDetails,action.payload.payload]}
        case CreditCardActionTypes.ADD_CREDIT_CARD_FAILURE:
            return {...state,  creditCardDetails : [...state.creditCardDetails], error : action.payload.error}
        default:
            return state;   
    }


}