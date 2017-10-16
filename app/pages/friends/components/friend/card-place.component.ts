import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'card-place',
  templateUrl: './card-place.html'
})
export class CardPlaceComponent implements OnInit {
  @Input() place:any;
  @Output() moreInfos = new EventEmitter();
  @Output() add = new EventEmitter();

  public ngOnInit() {
    console.log('CardPlaceComponent init');
  }

  protected onMoreInfos() {
    this.moreInfos.next(this.place);
  }

  protected onAdd() {
    this.add.next(this.place);
  }
}