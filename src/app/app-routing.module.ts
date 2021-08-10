import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule)
  // },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'view-cust',
    component: ViewCustomerComponent
  },
  {
    path: 'add-cust',
    component: AddCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
