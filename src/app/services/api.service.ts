import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Members} from '../../models/Members';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  apiUrl = 'http://localhost:3000/api/members/';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getMembers(route?: any) {
    return this.http.get(this.apiUrl , this.httpOptions);
  }
  getMember(id: any) {
    return this.http.get(this.apiUrl + id , this.httpOptions);
  }
}
