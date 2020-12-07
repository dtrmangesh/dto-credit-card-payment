import { CreditCardActionTypes } from "../actions/payment.actions";
import { createFeatureSelector } from '@ngrx/store';
export const selectEvent = createFeatureSelector<any>('creditCardPayment');




interface IAddCredit {
    creditCardNumber :string
}

export function getdata(state =[] ,action:any) {
    switch (action.type) {
        case CreditCardActionTypes.ADD_CREDIT_CARD_SUCCESS:
            console.log(state, "state");
            console.log(typeof state)
            return [...state,action.payload.payload]
        case CreditCardActionTypes.ADD_CREDIT_CARD_FAILURE:
            return state;
        default:
            return state;   
    }


}