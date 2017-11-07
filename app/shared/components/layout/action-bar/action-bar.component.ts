import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

import application = require('application');

@Component({
  selector: 'app-action-bar',
  moduleId: module.id,
  templateUrl: './action-bar.html'
})
export class ActionBarComponent implements OnInit {
  protected isAndroid:boolean = application.android ? true : false;
  protected showBackButton:boolean = false;
  @Output() openMenu = new EventEmitter();

  public constructor(private router:Router, private routerExtensions:RouterExtensions, private fonticon:TNSFontIconService) { }
  
  public ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showBackButton = this.routerExtensions.canGoBackToPreviousPage();
      }
    });
  }

  protected onBackPage() {
    this.routerExtensions.backToPreviousPage();
  }
  protected onOpenMenu() {
    this.openMenu.next();
  }
}

