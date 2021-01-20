import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books:Book[]|any
  //obj:Book|any
  constructor(private bookservice:BookService,
    private route:Router) { }


  ngOnInit(): void {
    this.getBookList();
  }
  private getBookList(){
    this.bookservice.getBookList().subscribe(data=>{
       for(let i=0;i<7;i++){
           const ele=data[i];
           console.log(ele);
         }
      this.books=data;
    },
    error=>console.log(error)
    );
  }
  updateBook(bookid:number){
    console.log("bookid to update = "+bookid);
    this.route.navigate(['updatebook',bookid]);
  }
  
  goToBookList(){
    this.route.navigate(['/booklist']);
  }
}
