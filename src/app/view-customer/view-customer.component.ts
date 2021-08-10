import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {
  noUsers: boolean = false;
  customerForm: FormGroup;
  cust: any;
  customerService;
  custList: Customer[];

  constructor(
    protected fb: FormBuilder
  ) {
    this.createCustomerForm();
    this.customerService=new CustomerService();
  }

  ngOnInit(): void {
    this.custList = this.customerService.getCustomer();
  }
  

  createCustomerForm(): void {
    this.customerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]+$")]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }

  delete(event: any) {
    this.custList = this.custList.filter(a => a.name !== event.name);
    if (this.custList.length == 0) {
      this.noUsers = true;
    }
  }

  update(event: any) {
    this.customerForm.patchValue({
      name: event.name,
      mobile: event.mobile,
      email: event.email
    });
  }

  formSubmit() {
    this.cust = this.custList.filter((cust) => {
      return (cust.name === this.customerForm.value.name)
    });

    this.custList.forEach((element, index) => {
      if (element.name === this.customerForm.value.name) {
        this.custList.splice(index, 1);
      }
    });

    if (this.cust.length > 0) {
      this.cust.name = this.customerForm.value.name;
      this.cust.mobile = this.customerForm.value.mobile;
      this.cust.email = this.customerForm.value.email;
      this.custList.push(this.cust);
    } else {
      this.custList.push(this.customerForm.value);
    }

  }

  onReset() {
    this.customerForm.reset();
  }

}
