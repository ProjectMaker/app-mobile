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
    
  }

  protected onBottomBarItemTap(item) {
    this.routerExtensions.navigate([item.route], { clearHistory: true });
  }
}