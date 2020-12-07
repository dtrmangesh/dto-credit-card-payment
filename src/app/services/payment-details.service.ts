import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class FetchCreditCardService {
  constructor(private readonly http: HttpClient) {}

  getCreditData(): Observable<any> {
    return this.http.get('../store/credite-card.store.json');
  }
}
