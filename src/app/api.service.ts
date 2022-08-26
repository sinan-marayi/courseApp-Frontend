import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCourse = () => {
    return this.http.get('http://52.1.249.26:3000/api/view');
  };


  addCourse = (data: any) => {
    return this.http.post('http://52.1.249.26:3000/api/add', data);
  };


  removeCourse = (data: any) => {
    return this.http.post('http://52.1.249.26:3000/api/deleteById', data);
  };

  searchCourse=(data:any)=>{
    return this.http.post('http://52.1.249.26:3000/api/search',data)
  }
}
