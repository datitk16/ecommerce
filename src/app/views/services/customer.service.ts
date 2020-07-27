import { Customers, CustomerItem } from '../models/customer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../core/constants';
import { Observable } from 'rxjs/internal/Observable';
import { SearchCustomerRequest, CreateCustomerRequest, DeleteCustomerRequest } from '../models/customer-request.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private user_url = Constants.BASE_API_URL + 'users';
  constructor(
    private httpClient: HttpClient
  ) { }

  public getCustomer(): Observable<Customers> {
    return this.httpClient.get<Customers>(this.user_url);
  }

  public searchCustomer(request: SearchCustomerRequest): Observable<Customers> {
    return this.httpClient.post<Customers>(this.user_url + '/search', request);
  }

  public createCustomer(request: CreateCustomerRequest): Observable<CustomerItem> {
    return this.httpClient.post<CustomerItem>(this.user_url, request);
  }

  public deleteCustomer(request: DeleteCustomerRequest) {
    return this.httpClient.post(this.user_url + '/delete', request);
  }

  public verifyUser(request: DeleteCustomerRequest): Observable<CustomerItem> {
    return this.httpClient.post<CustomerItem>(this.user_url + '/verify', request);
  }

  public verifyPassword(request: string):Observable<boolean> {
    return this.httpClient.post<boolean>(this.user_url + '/verifyPassword', { password: request });
  }

  public changePassword(request: string) {
    return this.httpClient.post(this.user_url + '/changePassword', { password: request });
  }
}
