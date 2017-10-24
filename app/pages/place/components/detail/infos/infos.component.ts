import { Component, OnInit } from "@angular/core";
import { PlaceService } from '../../../../../core/services'

@Component({
  moduleId: module.id,
  selector: 'place-detail-infos',
  templateUrl: './infos.html'
})
export class PlaceDetailInfosComponent implements OnInit {
  protected place:any;

  public constructor(private placeService:PlaceService) { }

  public ngOnInit() {
    this.place = this.placeService.getPlace();
  }
}