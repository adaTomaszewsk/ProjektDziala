import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';
import { BasketComponent } from './basket/basket.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    CustomerComponent,
    CustomerOrdersComponent,
    HistoryComponent,
    LoginComponent,
    NewMealComponent,
    OrderComponent,
    RegisterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
