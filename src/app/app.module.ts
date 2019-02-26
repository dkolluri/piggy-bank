import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { FormWizardModule } from 'angular2-wizard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CalculateComponent } from './calculate/calculate.component';
import { SavingsComponent } from './savings/savings.component';
import { SavingsSoonComponent } from './savings-soon/savings-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CalculateComponent,
    SavingsComponent,
    SavingsSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormWizardModule
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> ac778ae... initial commit
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
