import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryLevel1 } from '../models/categoryLevel1.model';
import { Observable } from 'rxjs';
import { Constants } from '../../core/constants';
import { CategoryLevel2 } from '../models/categoryLevel2.model';
import { CategoryLevel2Request } from '../models/categoryLevel2-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesLevel1_url = Constants.BASE_API_URL + 'categoriesC1';
  private categoriesLevel2_url = Constants.BASE_API_URL + 'categoriesC2';
  constructor(
    private httpClient: HttpClient
  ) { }

  getCategoryLevel1(): Observable<CategoryLevel1> {
    return this.httpClient.get<CategoryLevel1>(this.categoriesLevel1_url);
  }

  getCategoryLevel2(request: CategoryLevel2Request): Observable<CategoryLevel2> {
    return this.httpClient.post<CategoryLevel2>(this.categoriesLevel2_url + '/categoriesLevel2ByLevel1Id', request);
  }

  deleteCategory(request: string): Observable<object> {
    return this.httpClient.post<object>(this.categoriesLevel2_url + '/delete', { id: request });
  }

  updateCategory(id: string, name: string): Observable<CategoryLevel2> {
    return this.httpClient.post<CategoryLevel2>(this.categoriesLevel2_url + '/update', { id: id, name: name });
  }

}
