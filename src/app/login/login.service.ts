import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class LoginService {
  constructor (private http: Http) {}
  loginUser(email: string, password: string){
    var body = "email=" + email + "&password=" + password;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  
  this.http
    .post('http://localhost:5000/api/Authentication/LoginUser', 
      body, {
        headers: headers
      })
    .map(response => response.json())
    .subscribe(
      response => { console.log(JSON.stringify(response));
       },
      () => { console.log("error!") },
      () => console.log('Authentication Complete')
    );
  }
}