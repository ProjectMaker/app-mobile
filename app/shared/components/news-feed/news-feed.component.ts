import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'news-feed',
  templateUrl: './news-feed.html'
})
export class NewsFeedComponent {
  @Input() place:any;
}