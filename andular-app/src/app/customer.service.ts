import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './appmodel/customer';
import { Login } from './appmodel/Login';
import { Observable } from 'rxjs';
import { LoginStatus } from './appmodel/LOginStatus';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }//Di
  register(customer:Customer){
    let url='http://localhost:8080/register';
    return this.http.post(url,customer);
  }
  login(login: Login) : Observable<LoginStatus> {
    let url = 'http://localhost:8080/login';
    return this.http.post<LoginStatus>(url, login);
  }
}
