import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent implements OnInit {
  //
  // public isLoggedIn = false;F
  // public loggedUser: User;
  //
  // constructor(private route: ActivatedRoute,
  //             private router: Router,
  //             private authenticationService: LoginService) {
  // }
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
