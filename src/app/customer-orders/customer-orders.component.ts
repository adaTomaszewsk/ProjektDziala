import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent {
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
  //
  // onFormatDate(date: string) {
  //   return moment(date).format('DD.MM.YYYY, HH:mm:ss');
  // }
}
