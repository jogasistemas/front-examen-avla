import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  readonly API = 'user';
  readonly BASE_URL = environment.baseUrl;
 
  constructor(private http: HttpClient) {}
  
  getAllUser() {
    const url = `${this.BASE_URL}/${this.API}/`;

    return this.http.get(url);
  }

}