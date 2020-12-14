import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {MenuComponent} from './menu/menu.component';
import {CustomerOrdersComponent} from './customer-orders/customer-orders.component';
import {HistoryComponent} from './history/history.component';
import {BasketComponent} from './basket/basket.component';
import {NewMealComponent} from './new-meal/new-meal.component';
// import {HistoryComponent} from './history/history.component';
// import {ResetPasswordComponent } from './reset-password/reset-password.component';
// import {NewMealComponent} from './new-meal/new-meal.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     {path: 'logowanie', component: LoginComponent}]},
  // {path: '', pathMatch: 'full', redirectTo: '/logowanie'},


  // {
  //   path: 'klient', component: CustomerComponent, canActivate: [AuthGuard], data: {roles: [Role.CUSTOMER]},
  //   children: [
  //     {path: '', redirectTo: 'menu', pathMatch: 'full'},
  //     {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
  //     {path: 'historia', component: CustomerOrdersComponent, canActivate: [AuthGuard]},
  //     // {path: 'historia2', component: HistoryComponent, canActivate: [AuthGuard]},
  //     {path: 'koszyk', component: BasketComponent, canActivate: [AuthGuard]},
  //     {path: 'dane_osobowe_klienta', component: DataCutomerComponent, canActivate: [AuthGuard]},
  //     {path: 'edycja_danych_klienta', component: EditDataCutomerComponent, canActivate: [AuthGuard]},
  //     // {path: 'nowe_zamowienie', component: NewMealComponent, canActivate: [AuthGuard]},
  //
  //   ]
  // },
  // {
  //   path: 'dostawca', component: SupplierComponent, canActivate: [SupplierAuthGuard], data: {roles: [Role.SUPPLIER]},
  //   children: [
  //     {path: '', redirectTo: 'zamowienia', pathMatch: 'full'},
  //     {path: 'zamowienia', component: UndeliveredOrdersComponent, canActivate: [SupplierAuthGuard]},
  //     {path: 'realizowane_zamowienia', component: SupplierOrdersComponent, canActivate: [SupplierAuthGuard]},
  //     {path: 'dane_osobowe_dostawcy', component: DataSupplierComponent, canActivate: [SupplierAuthGuard]},
  //     {path: 'edycja_danych_dostawcy', component: EditDataSupplierComponent, canActivate: [SupplierAuthGuard]}
  //   ]
  // },
  //
  // {path: 'logowanie', component: LoginComponent},
  // {path: 'rejestracja', component: RegisterComponent},
  // // {path: 'haslo/resetuj', component: ResetPasswordComponent},
  // {path: '**', redirectTo: 'logowanie'},

  {path: 'customer', component: CustomerComponent, children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {
        path: 'menu', // child route path
        component: MenuComponent, // child route component that the router renders
      },
      {path: 'koszyk', component: BasketComponent},
      {path: 'historia', component: CustomerOrdersComponent},
      {path: 'historia2', component: HistoryComponent},
      {path: 'nowe_zamowienie', component: NewMealComponent}]
  },
  { path: '',   redirectTo: '/customer', pathMatch: 'full' }, // redirect to `first-component`

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
