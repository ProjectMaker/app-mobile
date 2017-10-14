import { Component, ViewChild, AfterViewInit, OnInit, Input, ViewContainerRef, ChangeDetectorRef, ComponentRef, ComponentFactoryResolver } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';

@Component({
  moduleId: module.id,
  selector: "app-layout",
  templateUrl: "./layout.html"
})
export class LayoutComponent implements AfterViewInit {
  private drawer: RadSideDrawer;
  private componentRef:ComponentRef<any>;

  @Input() ComponentClass:any;
  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

  constructor(protected routerExtensions:RouterExtensions, protected _changeDetectionRef: ChangeDetectorRef, protected  compiler: ComponentFactoryResolver) { }
  

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();

    let componentFactory = this.compiler.resolveComponentFactory(this.ComponentClass);
    this.componentRef = this.content.createComponent(componentFactory);
  }


  public onSelectItem(item:string) {
    //console.log('onSelectItem', item);
    this.routerExtensions.navigate([item], { clearHistory: true });
  }

  public onOpenMenu() {
    if (this.drawer.getIsOpen()) this.drawer.closeDrawer();
    else this.drawer.showDrawer();
  }
}