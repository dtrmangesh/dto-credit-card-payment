import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { take } from "rxjs/operators";
import { ICreditCardPayment } from "./app.interfaces";
import { selectEvent } from "./store/reducers/payment.reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isRoot: boolean = false;
  creditCardPayments: ICreditCardPayment[] = [];
  mydata = this.store.pipe(take(1), select(selectEvent));
  constructor(private router: Router, private readonly store: Store) {
    this.mydata.subscribe(
      ({ creditCardDetails }) => (this.creditCardPayments = creditCardDetails)
    );
  }
  goto() {
    this.isRoot = true;
    this.router.navigateByUrl("payment-details");
  }
}
