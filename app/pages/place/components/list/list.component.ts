import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { PlaceService } from '../../../../core/services'

@Component({
  moduleId: module.id,
  selector: 'app-place-list',
  templateUrl: './list.html'
})
export class PlaceListComponent implements OnInit {
  protected places:Array<any> = [];
  protected placeExpand:any;

  public constructor(private placeService:PlaceService, private routerExtensions:RouterExtensions) { }
  public ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

  protected onExpand(place) {
    if (this.placeExpand !== place) this.placeExpand = place;
    else this.placeExpand = null;
  }
  
  protected onRemove(place) {
    console.log('onRemove', place.name);
  }

  protected onMoreInfos(place) {
    this.routerExtensions.navigate(['place', place._id, 'infos']);
  }
}