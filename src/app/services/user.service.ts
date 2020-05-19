import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../shared/models/customer.model';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../core/constants';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginUrl = Constants.AUTH_URL + '/login';
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<Customer> {
    return this.httpClient.post<Customer>(this.loginUrl, { email, password });
  }
}
