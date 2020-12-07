import { Injectable } from "@angular/core";
import { Effect ,Actions, ofType } from "@ngrx/effects";
import { CreditCardActionTypes, AddCreditCardSuccess, LoadCreditCardFailure } from "../actions/payment.actions";
import {  map } from "rxjs/operators";

@Injectable()
export class CreditEffect {
  constructor(
   private readonly action  :Actions
  ) {}

    @Effect()
    addCreditCard = this.action.pipe(ofType(CreditCardActionTypes.ADD_CREDIT_CARD), map((payload) => {
      const failApi = this.getRandomInt();
      if (failApi === 4) {
        return new LoadCreditCardFailure({ error: 'Item not added' });
      } else {
      return new AddCreditCardSuccess(payload);
      }
    }))
  
    getRandomInt(min=0, max=5) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
