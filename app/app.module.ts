import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from '../ProductDetails.component';
export const routes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, ProductDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
