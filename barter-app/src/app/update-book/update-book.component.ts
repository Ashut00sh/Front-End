import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  bookId: number | any;
  books:Book[]|any;
  book: Book = new Book();
  constructor(private bookservise:BookService,
    private arouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.bookId=this.arouter.snapshot.params['bookid'];
    console.log("book id from activated route"+this.bookId);
    this.bookservise.getBookById(this.bookId).subscribe(data=>{
      this.book=data;
    },error=>console.log(error));
  }
  onSubmit(){
    console.log(this.book);
    this.bookservise.updateBook(this.bookId,this.book).subscribe(data=>{
     this.goToBookList();
    },error=>console.log(error));
  }
  goToBookList(){
    this.router.navigate(['/booklist']);
  }
}
