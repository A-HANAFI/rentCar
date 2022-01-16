import { NewCarComponent } from './cars/new-car/new-car.component';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './login/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component: SignUpComponent},
  {path:'newcar', component: NewCarComponent},
  {path: '**', component:CarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
