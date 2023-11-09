import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
 


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

 