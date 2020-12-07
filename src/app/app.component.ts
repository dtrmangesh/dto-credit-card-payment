import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { selectEvent } from './store/reducers/payment.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isRoot = false;
  creditCardPayments: any;
  mydata = this.store.pipe(take(1), select(selectEvent));
  constructor(private router: Router,
    private readonly store :Store
  ) {
    this.mydata.subscribe(data => this.creditCardPayments = data);
   }
  goto() {
    this.isRoot = true;
    
    this.router.navigateByUrl("payment-details");
  }
}
