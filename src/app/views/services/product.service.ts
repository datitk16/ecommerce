import { Products } from './../models/product-item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../core/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private constrollerPath = '';
  private getProducts = Constants.PRODUCT_URL;

  constructor(private httpClient: HttpClient) { }

  public getProductList(): Observable<Products> {
    return this.httpClient.get<Products>(this.getProducts);
  }
}
