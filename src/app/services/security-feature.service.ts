import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurityFeature } from '../models/securityFeature';

@Injectable({
  providedIn: 'root'
})
export class SecurityFeatureService {

  constructor(private httpClient: HttpClient) { }

  getSecurityFeatures(): Observable<SecurityFeature[]> {
    return this.httpClient.get<SecurityFeature[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-security-features');
  }
}
