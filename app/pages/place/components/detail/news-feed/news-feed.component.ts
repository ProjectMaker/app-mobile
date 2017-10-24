import { Component, OnInit } from "@angular/core";
import { NewsFeedService } from '../../../../../core/services'

@Component({
  moduleId: module.id,
  selector: 'place-detail-news-feed',
  templateUrl: './news-feed.html'
})
export class PlaceDetailNewsFeedComponent implements OnInit {
  protected newsFeed:any;

  public constructor(private newsFeedSercice:NewsFeedService) { }

  public ngOnInit() {
    this.newsFeed = this.newsFeedSercice.getPlace();
  }
}