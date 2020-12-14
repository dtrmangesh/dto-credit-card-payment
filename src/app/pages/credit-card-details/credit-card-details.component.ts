import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AddCreditCard, LoadCreditCardFailure } from '../../store/actions/payment.actions';
import { take } from 'rxjs/operators';
import { selectEvent } from 'src/app/store/reducers/payment.reducers';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {
  mydata = this.store.pipe(take(1), select(selectEvent));

  creditCardPayment: any;
  creditCardPaymentDetails: any;
  submitted: boolean = false;
  cardNumber: string = '';
  cardName: string = "";
  expiredDate: string = '';
  cvvNumber: number = 0;
  creditAmount: string = "";
  minMonth: string = "";
  flippedCard: boolean = false;
  addedCard: boolean = false;
  validateExpiryDate: boolean = true;
  constructor(private readonly formBuilder: FormBuilder,
    private store: Store

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
        [Validators.required]
      ],
      expirationDate: [
        '',
        [Validators.required]
      ],
      securityCode: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3)])],
      amount: [
        null,
        Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]*$')])
      ]
    });
  }

  get f() {
    return this.creditCardPayment.controls;
  }

  checkExpiryDate(): void {
    const expiryDate = this.creditCardPayment.get('expirationDate').value;
    var validateExpiryDate = expiryDate.split('-');
    const getYear = new Date().getFullYear();
    this.validateExpiryDate = validateExpiryDate[0] >= getYear ? true : false;
  }

  onAddCard(): void {
    this.submitted = true;

    const data = {
      creditCardNumber: this.creditCardPayment.get('creditCardNumber').value,
      cardHolderName: this.creditCardPayment.get('cardHolderName').value,
      expirationDate: this.creditCardPayment.get('expirationDate').value,
      securityCode: this.creditCardPayment.get('securityCode').value,
      amount: this.creditCardPayment.get('amount').value
    }

    this.store.dispatch(new AddCreditCard(data));
    this.addedCard = true;
    this.mydata.subscribe(
      (data) => { this.creditCardPaymentDetails = data.error },
    );

    // Timeout for showing animations on alert messages.
    setTimeout(() => {
      this.addedCard = false;
      this.creditCardPaymentDetails = '';
    }, 3000);


  }

  flipCard(event: boolean): void {
    if (!event) {
      this.flippedCard = true;
    } else {
      this.flippedCard = false;
    }
  }
  onNameChange($event: string): void {
    this.cardName = $event;
  }
  onNumberChange($event: string): void {
    this.cardNumber = $event;
  }
  onExpirationChange($event: string): void {
    this.expiredDate = $event;

  }

  onCVVChange($event: number): void {
    this.cvvNumber = $event;
  }

  get getMinimumExpiryDate(): string {
    const getYear = new Date().getFullYear();
    const getMonth = new Date().getMonth() + 1;
    return getYear + '-' + getMonth;
  }

}
