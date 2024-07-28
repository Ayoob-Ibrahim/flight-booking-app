import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  
@NgModule({


  //declaration section contains components name, service,pipes,dependencies,by declaring here we can use all this things

  declarations: [
    AppComponent,
  ],

  //we can import module like httpclientmodule for fetching the data from backend,after importing the modules then only we can use that particular module 
  //ng module,in the declaration component in angular
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //exports
  //that is used to exports the components where ever this module is imported
  providers: [],
  //bootstrap is the way for kickstarting the angular module ,appcompoent is delcared here, so that component will be called first;
  bootstrap: [AppComponent]
})
export class AppModule { }
