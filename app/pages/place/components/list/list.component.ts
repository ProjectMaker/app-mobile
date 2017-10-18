import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-place-list',
  templateUrl: './list.html'
})
export class PlaceListComponent implements OnInit {
  protected places:Array<any> = [];
  protected placeExpand:any;

  public constructor(private routerExtensions:RouterExtensions) { }
  public ngOnInit() {
    this.places = [{
      _id: 1, name: 'Le bouillon belge',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    },{
      _id: 2, name: 'Paris Hanoi',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    },{
      _id: 3, name: 'Train bleu',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    }]
  }

  protected onExpand(place) {
    if (this.placeExpand !== place) this.placeExpand = place;
    else this.placeExpand = null;
  }
  
  protected onRemove(place) {
    console.log('onRemove', place.name);
  }

  protected onMoreInfos(place) {
    this.routerExtensions.navigate(['place/detail/infos']);
  }
}