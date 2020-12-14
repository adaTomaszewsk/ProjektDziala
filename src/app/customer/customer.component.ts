import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  //
  // public isLoggedIn = false;
  // public loggedUser: User;
  //
  constructor(private route: ActivatedRoute,
              private router: Router) {
  }



  ngOnInit() {
    // this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    // this.loggedUser = this.getLoggedUser();
  }

  // getLoggedUser(): User {
  //   return this.authenticationService.getLoggedUser();
  // }
  //
  // handleLogout() {
  //   this.authenticationService.logout();
  // }
}
