import { Component, OnInit, ViewChild } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';
import { Store } from '@ngrx/store';

import * as basicsActions from '../../../store/basics.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  categories: string[];
  category: string;
  quote: Quote;
  @ViewChild('addQuoteForm') addQuoteForm;
  lastId: number;
  constructor(private store: Store<{basics: Quote}>, private router: Router) { }

  ngOnInit() {
    this.categories  = ['Inspirational', 'Motivational', 'Patriotic', 'Love', 'Romance', 'Optimism'];
    this.category = this.categories[0];
    this.store.select('basics').subscribe((data:any) => {
      this.lastId = data.quotes[data.quotes.length - 1].id;
    });
  }

  addQuote() {
    const form = this.addQuoteForm.value;
    const quote: Quote = new Quote(this.lastId + 1, form.category, form.text, form.author, false, false);
    this.store.dispatch(new basicsActions.AddQuote(quote));
    this.router.navigate(['/main', 'quotes']);
  }

}
