import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  @Input() creditPaymentDetails: any;
  flippedCard =false
  constructor() { }

  ngOnInit() {
    console.log("compoenent ",this.creditPaymentDetails)
  }

  flipTheCard() {
    this.flippedCard = !this.flippedCard;
    console.log('focusOnContainer')
  }
}
