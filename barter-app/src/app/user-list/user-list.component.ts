import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   users: User[] | undefined;
  //public users;
   
  constructor(private userservice:UserServiceService,
    private route:Router) { }

  ngOnInit(): void {
    this.getUsers();
   

  }
  private getUsers(){
    this.userservice.getUserList().subscribe(data=>{
       for(let i=0;i<7;i++){
           const ele=data[i];
           console.log(ele);
         }
      this.users=data;
    },
    error=>console.log(error)
    );
  }
      // for(let i=0;i<7;i++){
      //   const ele=data[i];
      //   console.log(ele);
      // }
      // this.users=[{
      //   "UserName":"ashutosh",
      //   "UserId":101,
      //   "Pincode":123455,
      //   "Address":"soalpur",
      //   "Phone":1234,
      //   "Password":"as12",
      //   "Email":"ashu@gmail.com",
      //   "Gender":"male"
      // }]
      


}