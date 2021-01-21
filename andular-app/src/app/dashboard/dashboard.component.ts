import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  customerId: number|any;
  name: string|any;
  constructor() { }

  ngOnInit(): void {
    this.customerId = sessionStorage.getItem('customerId');
    this.name = sessionStorage.getItem('name');
  }

}
