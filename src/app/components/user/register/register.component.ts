import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import * as basicsAction from '../../../store/basics.action';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /** variables declaration */
  user: User = new User(0, '', '', '', '', '');
  count: number = 1;
  @ViewChild('userForm') userForm;
  agreement: string = `*By clicking Register, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.`;
  /** variables declaration */

  constructor(public store: Store<{basics: User}>, public router: Router) { }

  ngOnInit() {
  }

  getId() {
    return this.count++;
  }

  register() {
    this.userForm.value.id = this.getId();
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      this.store.dispatch(new basicsAction.AddUser(user));
      this.store.dispatch(new basicsAction.LoginUser(true));
      this.userForm.reset();
      this.router.navigate(['/main', 'quotes'])
    }
    
  }

}
