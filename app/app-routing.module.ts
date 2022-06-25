import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';

import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  
  {
    path: 'payment',
    component: PaymentComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
