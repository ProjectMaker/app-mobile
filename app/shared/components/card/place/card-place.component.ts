import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'card-place',
  templateUrl: './card-place.html'
})
export class CardPlaceComponent {
  @Input() showMoreInfos:boolean;
  @Input() showAdd:boolean;
  @Input() showRemove:boolean;

  @Input() place:any;
  @Output() moreInfos = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();

  protected onMoreInfos() {
    this.moreInfos.next(this.place);
  }

  protected onAdd() {
    this.add.next(this.place);
  }

  protected onRemove() {
    this.remove.next(this.place);
  }
}