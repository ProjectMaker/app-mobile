import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
  selector: 'app-action-bar',
  moduleId: module.id,
  templateUrl: './action-bar.html'
})
export class ActionBarComponent implements OnInit {
  @Output() openMenu = new EventEmitter();

  public constructor(private fonticon:TNSFontIconService) { }
  
  public ngOnInit() {
    console.log('ON INIT');
  }
  
  protected onOpenMenu() {
    this.openMenu.next();
  }
}

