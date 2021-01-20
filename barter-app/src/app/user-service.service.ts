import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl="http://localhost:8080/users";

  constructor(private httpClient:HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
    //console.log("in services");
  }
 
}

