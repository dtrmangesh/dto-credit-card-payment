import { getdata } from "./reducers/payment.reducers";
import {CreditEffect} from '../store/effects/payment.effects'
export const effect =[CreditEffect];
export const state :any = {
    creditCardPayment : getdata
};