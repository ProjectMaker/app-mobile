import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.html',
  styleUrls: ['./menu.common.css']
})
export class MenuComponent implements OnInit {

  @Output() selectedItem = new EventEmitter();

  public ngOnInit() { }

  public onSelectItem(item) {
    this.selectedItem.next(item);
  }
};