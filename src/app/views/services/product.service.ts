import { Products } from './../models/product-item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../core/constants';
import { Observable } from 'rxjs';
import { DeleteRequest, SearchRequest } from '../models/request-product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private constrollerPath = '';
  private product_url = Constants.PRODUCT_URL;

  constructor(private httpClient: HttpClient) { }

  public getProductList(): Observable<Products> {
    return this.httpClient.get<Products>(this.product_url);
  }

  public deleteProduct(request: DeleteRequest) {
    return this.httpClient.post(this.product_url + '/delete', request);
  }

  public searchProduct(request: SearchRequest): Observable<Products> {
    console.log(request)
    return this.httpClient.post<Products>(this.product_url + '/search', request);
  }
}
