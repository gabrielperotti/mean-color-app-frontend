import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private baseUrl = 'http://localhost:3000/colors'; // URL al endpoint del backend

  constructor(private http: HttpClient) { }

  getColors(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}