import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-action-bar',
  templateUrl: 'action-bar.html',
})
export class ActionBarComponent implements OnInit {
  @Output() openMenu = new EventEmitter();

  constructor() {
    console.log('ActionBarComponent constructor');
  }

  public ngOnInit() {
    console.log('onInit');
  }

  protected onOpenMenu() {
    this.openMenu.next();
  }
};