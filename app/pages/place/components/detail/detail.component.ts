import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-place-detail',
  templateUrl: './detail.html'
})
export class PlaceDetailComponent implements OnInit {
  protected place:any;
  protected newsFeed:any;
  protected bottomBarItems:Array<any> = [];

  public constructor(private routerExtensions:RouterExtensions) { }

  public ngOnInit() {
    this.bottomBarItems = [
      { label: 'Detail', code: 'detail', route: 'place/detail/infos' },
      { label: 'News feed', code: 'newsFeed', route: 'place/detail/news-feed' }
    ]
  }

  protected onBottomBarItemTap(item) {
    this.routerExtensions.navigate([item.route], { clearHistory: true });
  }
}