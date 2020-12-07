import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardDetailsComponent } from '../app/pages/credit-card-details/credit-card-details.component';
import { AppComponent} from './app.component';
const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },

  {
    path: 'payment-details',
    component: CreditCardDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
