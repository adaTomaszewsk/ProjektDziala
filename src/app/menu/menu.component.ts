import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //
  // dishes: Observable<Dish[]>;
  // orders = [];
  // dish: Dish;
  //
  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // this.reloadData();
  }

  // reloadData() {
  //   this.dishes = this.dishService.getDishes();
  // }
  //
  // add(id: number, price: number, name: string) {
  //   this.basketService.addItem(id, price, name);
  // }
}
