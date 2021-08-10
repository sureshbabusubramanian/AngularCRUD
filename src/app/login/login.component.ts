import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  loginForm: FormGroup;
  valid: boolean;
  adminUsers: Array<any> = [
    { name: 'suresh', password: 'suresh' },
    { name: 'admin', password: 'admin' }
  ];

  constructor(
    protected fb: FormBuilder,
    private router: Router
  ) {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      uname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]+$")]),
      psw: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    this.valid = false;
    if (this.loginForm.valid) {
      this.adminUsers.forEach(user => {
        if (user.name === this.loginForm.value.uname && user.password === this.loginForm.value.psw) {
          this.valid = true;
        }
      });
      if (!this.valid) {
        alert("Username & Password are Incorrect. Please Check");
      } else {
        this.router.navigateByUrl('/view-cust');
      }
    }
  }

  resetForm() {
    this.loginForm.reset();
  }

  getErrorMessage(formControlName: string){
      return  formControlName+ "is Mandatory";
  }

}
