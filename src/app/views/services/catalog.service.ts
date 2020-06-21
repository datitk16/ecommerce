import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityParents } from '../models/city-parent.model';
import { Wards } from '../models/ward.models';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpClient: HttpClient) { }

  getCity(): Observable<CityParents> {
    return this.httpClient.get<CityParents>('https://kltn-resales.herokuapp.com/api/address/city');
  }

  getWard(request: number): Observable<Wards[]> {
    return this.httpClient.post<Wards[]>('https://kltn-resales.herokuapp.com/api/address/ward', { cityID: request });
  }

}
