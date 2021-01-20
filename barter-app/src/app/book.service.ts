import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService implements OnInit{
  private baseurl="http://localhost:8080/books";

  constructor(private httpclient:HttpClient) { }
  ngOnInit(): void {
    this.getBookList();
   

  }
  //get list of books
  getBookList(): Observable<Book[]>{
    return this.httpclient.get<Book[]>(`${this.baseurl}`);
    //console.log("in services");
  }
  //call update book by id

  getBookById(bookid:number): Observable<Book>{
    return this.httpclient.get<Book>(`{this.baseurl}/${bookid}`)
  }
  //update book
  updateBook(bookid:number,obj:Book):Observable<Object>{
    return this.httpclient.put(`${this.baseurl}/${bookid}`,obj);
  }
}
