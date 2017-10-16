import { Component, OnInit, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'card-place',
  templateUrl: './card-place.html'
})
export class CardPlaceComponent implements OnInit {
  @Input() place:any;

  public ngOnInit() {
    console.log('CardPlaceComponent init');
  }
}