import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: './login.template.html',
    styleUrls: ['./login.css'],
    providers: [LoginService]

})
export class Login{
    email: string;
    password: string;

    constructor(public route: ActivatedRoute, private loginService: LoginService) {

  }

  loginUser(){
      console.log(`email: ${this.email}, password: ${this.password}`);;
      var user = this.loginService.loginUser(this.email, this.password);
      console.log(JSON.stringify(user));
      
      
  }
}