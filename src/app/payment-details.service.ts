import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import {Http, Response, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class PaymentDetailsService {
  constructor(
    // private readonly http: Http
  ) { }

  // getCreditData(): Observable<any> {
  //   return this.http.get('assets/data.json');
  // }

  // addCreditData(): Observable<any> {
  //   const data = { name: 'mangesh' }
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   let body = JSON.stringify(data);
  //   return this.http.post('assets/data.json', body, options);
  // }
}