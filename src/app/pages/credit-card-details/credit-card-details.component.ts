import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PaymentDetailsService } from '../../payment-details.service';
import { Store } from '@ngrx/store';
import { AddCreditCard, AddcreditCardSuccess } from '../../store/actions/payment.actions';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {
  creditCardPayment :any;
  submitted = false;
  cardNumber = '';
  cardName = "";
  expiredDate = '';
  cvvNumber = "";
  creditAmount = "";
  minMonth: any;
  flippedCard = false;
  addedCard = false;
  validateExpiryDate = true;
  constructor(private readonly formBuilder: FormBuilder,
    private data: PaymentDetailsService,
    private store : Store

    ) { }

  ngOnInit() {

    this.initializeLoginForm();
    this.minMonth = this.getMinimumExpiryDate;
  }

  initializeLoginForm() {
    this.creditCardPayment = this.formBuilder.group({
      creditCardNumber: [
        '',
        [
          Validators.required,
        ],
      ],
      cardHolderName: [
        '',
        [ Validators.required]
      ],
      expirationDate: [
        '',
        [ Validators.required]
      ],
      securityCode: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3)])],
      amount: [
        null,
        Validators.compose([ Validators.required , Validators.pattern('^[1-9][0-9]*$')])
      ]
    });
  }
  get f() {
    return this.creditCardPayment.controls;
  }

  checkExpiryDate() {
    const expiryDate = this.creditCardPayment.get('expirationDate').value;
    var validateExpiryDate = expiryDate.split('-');
    const getYear = new Date().getFullYear();
    this.validateExpiryDate = validateExpiryDate[0] > getYear ? true : false;
  }

  onAddCard() {
    this.submitted = true;

    const data = {
      creditCardNumber: this.creditCardPayment.get('creditCardNumber').value,
      cardHolderName: this.creditCardPayment.get('cardHolderName').value,
      expirationDate: this.creditCardPayment.get('expirationDate').value,
      securityCode :this.creditCardPayment.get('securityCode').value,
      amount :this.creditCardPayment.get('amount').value
    }
    this.store.dispatch(new AddCreditCard(data));
    this.addedCard = true;
    setTimeout(()=>this.addedCard=false ,3000)
  }

  flipCard(event :any) {
    if (!event) {
      this.flippedCard = true;
    } else {
      this.flippedCard = false;
    }
  }
  onNameChange($event :any) {
    this.cardName = $event;
  }
  onNumberChange($event:any) {
    this.cardNumber = $event;
  }
  onExpirationChange($event:any) {
    this.expiredDate = $event;
  
  }

  onCVVChange($event:any) {
    this.cvvNumber = $event;
  }

  get getMinimumExpiryDate() {
    const getYear = new Date().getFullYear();
    const getMonth = new Date().getMonth() + 1;
    return getYear + '-' + getMonth;
  }
}
