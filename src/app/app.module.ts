import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 


import { AppComponent } from './app.component';
import { CreditCardDetailsComponent } from './pages/credit-card-details/credit-card-details.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {effect,state} from '../app/store/store'
@NgModule({
  declarations: [
    AppComponent,
    CreditCardDetailsComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot(effect),
    StoreModule.forRoot(state),
    StoreDevtoolsModule.instrument({ maxAge: 25, serialize: true }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
