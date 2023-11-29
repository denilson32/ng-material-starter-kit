import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComfortFeature } from '../models/comfortFeature';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComfortFeatureService {

  constructor(private hhtpClient: HttpClient) { }

  getComfortFeatures(): Observable<ComfortFeature[]> {
    return this.hhtpClient.get<ComfortFeature[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-comfort-features');
  }
}
