import { Component, Input } from '@angular/core';
import { ICreditCardPayment } from 'src/app/app.interfaces';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  @Input() creditPaymentDetails : ICreditCardPayment[] = [];
  flippedCard =false
  constructor() { }


  flipTheCard() {
    this.flippedCard = !this.flippedCard;
  }
}
