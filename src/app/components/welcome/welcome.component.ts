import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public store: Store<{basics: any}>) { }

  ngOnInit() {
    this.store.select('basics').subscribe(data => {
      console.log(data);
    });
  }

}
