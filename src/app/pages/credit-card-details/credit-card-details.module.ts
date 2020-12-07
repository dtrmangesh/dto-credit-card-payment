import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardDetailsComponent} from './credit-card-details.component';
import { PaymentDetailsService } from '../../payment-details.service';
const routes: Routes = [
  {
    path: '',
    component: CreditCardDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [CreditCardDetailsComponent],
  providers:[PaymentDetailsService]
})
export class CreditCardModule {}
