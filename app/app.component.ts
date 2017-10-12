import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';

@Component({
  moduleId: module.id,
  selector: "tk-sidedrawer-getting-started",
  templateUrl: 'app.html',
  //styleUrls: ['app.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private _changeDetectionRef: ChangeDetectorRef) { }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }


  public onSelectItem(item:string) {
    console.log('onSelectItem', item);
  }

  public onOpenMenu() {
    if (this.drawer.getIsOpen()) this.drawer.closeDrawer();
    else this.drawer.showDrawer();
  }
}