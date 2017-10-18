import { Component, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'place-detail-news-feed',
  templateUrl: './news-feed.html'
})
export class PlaceDetailNewsFeedComponent implements OnInit {
  protected newsFeed:any;

  public constructor() { }

  public ngOnInit() {
    this.newsFeed = {
      name: 'Le bouillon belge',
      users: [{
        pseudo: 'Snoop dog',
        contents: [{
          type: 'photo',
          name: 'Yeah photos',
          images: ['~/images/friend.png','~/images/friend.png','~/images/friend.png']
        }, {
          type: 'comment',
          name: 'It\'s amazing'
        }]
      }],
    };
  }
}