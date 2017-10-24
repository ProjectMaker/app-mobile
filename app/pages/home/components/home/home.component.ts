import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../../../core/services'
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  protected news:Array<any> = [];
  protected places:Array<any> = [];

  public constructor(private newsFeedService:NewsFeedService) { }

  public ngOnInit() {
    this.news = [];

    this.places = this.newsFeedService.getWall();
  }

  protected templateSelector(item: any, index: number, items: any) {
    return item.type;
  }
}