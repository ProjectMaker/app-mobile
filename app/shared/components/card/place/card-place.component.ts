import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'card-place',
  templateUrl: './card-place.html'
})
export class CardPlaceComponent {
  @Input() place:any;
  @Output() moreInfos = new EventEmitter();
  @Output() add = new EventEmitter();

  protected onMoreInfos() {
    this.moreInfos.next(this.place);
  }

  protected onAdd() {
    this.add.next(this.place);
  }
}