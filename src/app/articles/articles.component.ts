import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @Input() article: string;
  @Output() private articleEvent: EventEmitter<string>;
  constructor() {
    this.articleEvent = new EventEmitter<string>();
  }

  ngOnInit() {
    console.log(this.article);
  }

  onOutputEvent() {
    this.article = 'change from output';
    // you declare here what this event want to emit
    this.articleEvent.emit(this.article);
  }

}
