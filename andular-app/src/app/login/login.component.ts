import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../appmodel/Login';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }
  loginCheck() {
    //alert(JSON.stringify(this.login));
    this.service.login(this.login).subscribe(loginStatus => {
      alert(JSON.stringify(loginStatus));
      if(loginStatus.status=="SUCCESS"){
        sessionStorage.setItem('customerid',String(loginStatus.customerId));
        sessionStorage.setItem('name',String(loginStatus.name));
        this.router.navigate(['dashboard']);
      }
    });
  }
}