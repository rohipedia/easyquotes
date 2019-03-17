import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';

import * as basicsAction from '../../../store/basics.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user: User = new User(0, '', '', '', '', '');
  users: User[] = [];
  @ViewChild('loginForm') loginForm;
  errorMessage: string = '';

  constructor(public store: Store<{ basics: User }>, public router: Router) { }

  ngOnInit() {
    this.store.select('basics').subscribe((data: any) => {
      this.users = data.users;
    });
  }

  loginSuccess() {
    this.store.dispatch(new basicsAction.LoginUser(true));
    this.router.navigate(['/main', 'quotes']);
  }

  login() {
    const form = this.loginForm.value;
    const user = this.users.find(user => user.userid === form.userid);
    if (user) {
      if (user.password !== form.password) {
        this.errorMessage = 'Invalid Password!';
      } else {
        this.loginSuccess();
      }
    } else {
      this.errorMessage = 'Invalid Username!';
    }
    this.loginSuccess();
    this.loginForm.reset();
  }

}
