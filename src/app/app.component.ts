import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentDetailsService } from './payment-details.service';
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
  mydata = this.store.pipe(take(1), select(selectEvent));
  constructor(private router: Router,
    private data: PaymentDetailsService,
    private readonly store :Store
  ) {
    this.mydata.subscribe(data => console.log(data))
   }
  goto() {
    this.isRoot = true;
    
    this.router.navigateByUrl("payment-details");
  }
}
