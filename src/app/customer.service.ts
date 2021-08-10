import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  cust: Customer[];

  public getCustomer() {
    this.cust = [
      {
        name: 'Suresh',
        mobile: '123456',
        email: 'suresh@gmail.com'
      },
      {
        name: 'Test',
        mobile: '55555',
        email: 'test@gmail.com'
      },
      {
        name: 'babu',
        mobile: '222222',
        email: 'babu@gmail.com'
      },
      {
        name: 'Test1',
        mobile: '566666',
        email: 'test2@gmail.com'
      }
    ];
    return this.cust;
  }

  custTemp: any;
  public addCustomer(cust: any) {
    this.getCustomer();
    this.custTemp = this.cust.filter((element) => {
      return (element.name === cust.name)
    });

    this.cust.forEach((element, index) => {
      if (element.name === cust.name) {
        this.cust.splice(index, 1);
      }
    });

    if (this.custTemp.length > 0) {
      this.custTemp.name = cust.name;
      this.custTemp.mobile = cust.mobile;
      this.custTemp.email = cust.email;
      this.cust.push(this.custTemp);
    } else {
      this.cust.push(cust);
    }

  }
}
