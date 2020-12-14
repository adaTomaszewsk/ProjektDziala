import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
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

  ngOnInit() {
    // this.reloadData();
    // const currentUser = this.sessionService.get('currentUser');
    // this.id = currentUser.id;
  }

  // reloadData() {
  //   this.orders = this.orderService.getCustomerOrders(this.id);
  // }


}
