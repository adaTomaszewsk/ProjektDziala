import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {HttpErrorResponse} from '@angular/common/http';



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent  {
  //
  // statusShow = {
  //   DELIVERED: 'Dostarczone',
  //   ORDER: 'Zamówione',
  //   PREPARED: 'Przygotowane'
  // };
  // id: number;
  // orders: Observable<Order[]>;
  //
  // constructor(private orderService: OrderService,
  //             private router: Router,
  //             private sessionService: SessionStorageService) { }
  //
  // ngOnInit() {
  //   this.reloadData();
  //   const currentUser = this.sessionService.get('currentUser');
  //   this.id = currentUser.id;
  // }
  //
  // reloadData() {
  //   this.orders = this.orderService.getCustomerOrders(this.id);
  // }


}
