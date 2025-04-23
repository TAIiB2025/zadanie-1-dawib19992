import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { KoszykComponent } from './koszyk/koszyk.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    KoszykComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
