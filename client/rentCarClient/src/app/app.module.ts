import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { HeaderComponent } from './header/header.component';
import { CarComponent } from './cars/car/car.component';
import{HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NewCarComponent } from './cars/new-car/new-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarListComponent,
    HeaderComponent,
    CarComponent,
    SignUpComponent,
    LoginComponent,
    NewCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
