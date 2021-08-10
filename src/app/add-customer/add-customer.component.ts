import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customerService;

  constructor(
    protected fb: FormBuilder
  ) { 
    this.createCustomerForm();
    this.customerService=new CustomerService();
  }

  ngOnInit(): void {
  }

  createCustomerForm(): void {
    this.customerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]+$")]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl()
    });
  }

  formSubmit(){
    this.customerService.addCustomer(this.customerForm.value);
  }

  onReset(){
    this.customerForm.reset();
  }

}
