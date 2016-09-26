import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DynamicFormComponent} from "./dynamicform/dynamic-form.component";
import {DynamicFormElementComponent} from "./dynamicform/dynamic-form-element.component";

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormElementComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
