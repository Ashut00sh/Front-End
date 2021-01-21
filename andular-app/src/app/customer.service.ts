import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './appmodel/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclient:HttpClient) { }//Di
  register(customer:Customer){
    let url='';
    return this.httpclient.post(url,customer);
  }

}
