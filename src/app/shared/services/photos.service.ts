import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private apiBase =
    'https://f26015h8ee.execute-api.ap-south-1.amazonaws.com/Dev';
  constructor(private http: HttpClient) {}

  getPortfolioImages() {
    return this.http.get<any>(`${this.apiBase}/getProject/`);
  }
  getprojectImages(projectId: string) {
    return this.http.get<string[]>(`${this.apiBase}/getProject/${projectId}`);
  }
}
