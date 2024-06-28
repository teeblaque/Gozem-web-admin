import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:9000/api/v1';

  constructor(private http: HttpClient) { }

  getPackages(): Observable<any> {
    return this.http.get(`${this.baseUrl}/package`);
  }

  getPackageById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/package/${id}`);
  }

  createPackage(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/package`, data);
  }

  updatePackage(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/package/${id}`, data);
  }

  deletePackage(id: string, data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/package/${id}`, data);
  }

  getDeliveries(): Observable<any> {
    return this.http.get(`${this.baseUrl}/delivery`);
  }

  getDeliveryById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/delivery/${id}`);
  }

  createDelivery(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/delivery`, data);
  }

  updateDelivery(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/delivery/${id}`, data);
  }

  deleteDelivery(id: string, data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delivery/${id}`, data);
  }
}
