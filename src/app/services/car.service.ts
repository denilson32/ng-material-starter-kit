import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getBrands(): Observable<Car[]> {
    return this.http.get<Car[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-brands');
  }
}
