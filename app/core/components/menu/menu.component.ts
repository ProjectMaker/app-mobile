import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.html',
})
export class MenuComponent implements OnInit {

  @Output() selectItem = new EventEmitter();

  public ngOnInit() {
    console.log('ON INIT');
  }

  public onSelectItem(item) {
    this.selectItem.next(item);
  }
};