import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  projectDescription: any;
  fetchProjectDescription() {
    return this.http.get(
      `https://the-iyal-atlier.s3.amazonaws.com/projectDescription.json`
    );
  }
}
