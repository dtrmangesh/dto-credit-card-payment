import { Action } from '@ngrx/store';

export enum CreditCardActionTypes {
  ADD_CREDIT_CARD_SUCCESS = 'LOAD_CREDIT_CARD_SUCCESS',
  ADD_CREDIT_CARD_FAILURE = 'LOAD_CREDIT_CARD_FAILURE',
  ADD_CREDIT_CARD = 'ADD_CREDIT_CARD'
}


export class AddCreditCardSuccess implements Action {
  readonly type = CreditCardActionTypes.ADD_CREDIT_CARD_SUCCESS;
  constructor(public payload: any) {}
}

export class AddCreditCard implements Action {
    readonly type = CreditCardActionTypes.ADD_CREDIT_CARD;
    constructor(public payload: any) {
    }
}
  
export class LoadCreditCardFailure implements Action {
  readonly type = CreditCardActionTypes.ADD_CREDIT_CARD_FAILURE;
  constructor(public payload: { error: string }) {}
}
