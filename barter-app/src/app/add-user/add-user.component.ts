import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  obj:User=new User();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.obj);
  }
}
