import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../core/services'
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  protected news:Array<any> = [];
  protected places:Array<any> = [];

  public constructor(private dataService:DataService) { }

  public ngOnInit() {
    this.news = [];

    this.places = this.dataService.getNews();
    console.log('this.places', this.places);
  }

  protected templateSelector(item: any, index: number, items: any) {
    return item.type;
  }
}