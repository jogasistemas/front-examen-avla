import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserService {
  readonly API = 'user';
  readonly BASE_URL = environment.baseUrl;
  user: User= {
   userId:0,
   names:'seleccione Usuario',
   lastName: ''
  };
  constructor(private http: HttpClient) {}
  
  getAllUser() {
    const url = `${this.BASE_URL}/${this.API}/`;

    return this.http.get(url).pipe(map((users:any) =>{
      users.push(this.user); 
      return users;
    }));
  }

}