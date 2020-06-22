import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  selectedCustomer: Customer ;
  customers: Customer[];
  orderTotalSum: number;
  orderTotalCnt: number;

  constructor(private customerService: CustomerService) {
    this.orderTotalSum = 0 ;
    this.orderTotalCnt = 0 ;
    this.getCustomers();
  }

  ngOnInit() {
  }

  getTotalSum() {
    if (this.customers) {
        return this.customers.map(t => t.OrderTotalSum).reduce((a, value) => a + value, 0);
    }
    return 0;
  }

  getTotalCnt() {
    if (this.customers) {
        return this.customers.map(t => t.OrderTotalCnt).reduce((a, value) => a + value, 0);
    }
    return 0;
  }

  getCustomers() {
    this.customerService.getCustomers()
        .subscribe((data) => {
          this.customers = data;
          this.orderTotalSum = this.getTotalSum();
          this.orderTotalCnt = this.getTotalCnt();
        });
  }

}
