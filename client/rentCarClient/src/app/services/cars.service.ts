import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Car} from '../shared/car';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars : Car[];

  constructor(private http: HttpClient) {}

  //retrieving cars list
  getcars(): Observable<Car[]>{
    return <Observable<Car[]>> this.http.get('http://localhost:3000/cars');
  }
}
