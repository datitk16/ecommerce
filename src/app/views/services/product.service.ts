import { Products } from '../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../core/constants';
import { Observable } from 'rxjs';
import { DeleteRequest, SearchProductRequest, CreateProductRequest } from '../models/product-request-model';

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

  public searchProduct(request: SearchProductRequest): Observable<Products> {
    return this.httpClient.post<Products>(this.product_url + '/search', request);
  }

  public createProduct(request: CreateProductRequest): Observable<Products> {
    return this.httpClient.post<Products>(this.product_url, request);
  }
}
