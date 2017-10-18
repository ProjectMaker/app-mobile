import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bottom-bar',
  templateUrl: './bottom-bar.html',
  styleUrls: ['./bottom-bar.common.css']
})
export class BottomBarComponent { 
  @Input() items:Array<any>;
  @Output() itemTap = new EventEmitter();

  protected onItemTap(item) {
    this.itemTap.next(item);
  }
}