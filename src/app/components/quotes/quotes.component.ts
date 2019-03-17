import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';
import { Store } from '@ngrx/store';
import * as basicsActions from '../../store/basics.action';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [];
  constructor(private store: Store<{basics: Quote[]}>) { }

  ngOnInit() {
    const quote1 = new Quote(1, 'Inspirational',
      'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.', 
      'J.K.Rowling', false, false);
    const quote2 = new Quote(2, 'Motivational',
      `It is our choices...that show what we truly are, far more than our abilities.`, 
      'J.K.Rowling', false, false);
    const quote3 = new Quote(3, 'Story Telling',
      'Whether you come back by page or by the big screen, Hogwarts will always be there to welcome you home.', 
      'J.K.Rowling', false, false);
    const quote4 = new Quote(4, 'Story Telling',
      `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`, 
      'Marilyn Monroe', false, false);
    const quotes = [quote1, quote2, quote3, quote4];
    this.store.select('basics').subscribe((data: any) => {
      this.initiateQuotes(quotes, data.quotes);
    });
  }

  initiateQuotes(quotesList: Quote[], storeQuotes: Quote[]) {
    if (storeQuotes.length === 0) {
      this.store.dispatch(new basicsActions.AddQuotes(quotesList));
    } else {
      this.quotes = storeQuotes;
    }
  }

}
