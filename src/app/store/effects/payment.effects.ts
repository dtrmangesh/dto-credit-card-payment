import { Injectable } from "@angular/core";
import { Effect ,Actions, ofType } from "@ngrx/effects";
import { CreditCardActionTypes, AddcreditCardSuccess } from "../actions/payment.actions";
import { tap, map } from "rxjs/operators";

@Injectable()
export class CreditEffect {
  constructor(
   private readonly action  :Actions,
  ) {}

    @Effect()
    addCreditCard = this.action.pipe(ofType(CreditCardActionTypes.ADD_CREDIT_CARD), map((payload) => {
      return new AddcreditCardSuccess(payload)
    }))
  
}
