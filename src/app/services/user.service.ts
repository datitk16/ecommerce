import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../shared/models/customer.model';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../core/constants';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _token: string;
  private loginUrl = Constants.AUTH_URL + '/login';
  private cookiesCustomerKey = 'customer';
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<Customer> {
    return this.httpClient.post<Customer>(this.loginUrl, { email, password });
  }

  getCustomer(): Customer {
    return JSON.parse(this.cookieService.get(this.cookiesCustomerKey) || '{}') || {};
  }

  setCustomer(customer: Customer) {
    this.cookieService.set(this.cookiesCustomerKey, JSON.stringify(customer));
    this._token = customer.token;
  }

  get getToken(): string {
    return this._token ? this._token : this.getCustomer().token;
  }

  logout(): void {
    this._token = undefined;
    this.cookieService.delete(this.cookiesCustomerKey, '/');
    this.router.navigateByUrl('/login');
  }

}
