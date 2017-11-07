import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

import application = require('application');

@Component({
  selector: 'app-action-bar',
  moduleId: module.id,
  templateUrl: './action-bar.html'
})
export class ActionBarComponent implements OnInit {
  protected isAndroid:boolean = application.android ? true : false;
  @Output() openMenu = new EventEmitter();

  public constructor(private fonticon:TNSFontIconService) { }
  
  public ngOnInit() {
    console.log('ON INIT');
  }
  
  protected onOpenMenu() {
    this.openMenu.next();
  }
}

