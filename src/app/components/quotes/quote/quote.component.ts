import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote;
  likeText: string = 'Like';
  dislikeText: string = 'Dislike';

  constructor() { }

  ngOnInit() {
  }

  likeQuote() {
    this.quote.liked = !this.quote.liked;
    this.quote.disliked = false;
    this.likeText = this.quote.liked ? 'Liked' : 'Like';
  }

  dislikeQuote() {
    this.quote.liked = false;
    this.quote.disliked = !this.quote.disliked;
    this.dislikeText = this.quote.disliked ? 'Disliked' : 'Dislike';
  }

}
