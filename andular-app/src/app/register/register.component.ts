import { Component, OnInit } from '@angular/core';
import { Customer } from '../appmodel/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   customer:Customer=new Customer();
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }
  register(){
    alert(JSON.stringify(this.customer));
    this.service.register(this.customer).subscribe(Response=>{
      alert(JSON.stringify(Response));
    });
  }
}
