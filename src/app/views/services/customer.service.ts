import { Customers } from '../models/customer.model';
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

  public createCustomer(request: CreateCustomerRequest): Observable<Customers> {
    return this.httpClient.post<Customers>(this.user_url, request);
  }

  public deleteCustomer(request: DeleteCustomerRequest){
    return this.httpClient.post(this.user_url + '/delete', request);
  }
}
