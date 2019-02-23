import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HusseinComponent } from './hussein/hussein.component';
import { TitleDotsPipe } from './pips/title-dots.pipe';
import { InputFormDirective } from './input-form.directive';
import { ApiServingComponent } from './api-serving/api-serving.component';



@NgModule({
  declarations: [
    AppComponent,
    HusseinComponent,
    TitleDotsPipe,
    InputFormDirective,
    ApiServingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
