import { Component, OnInit } from "@angular/core";
import { DataService } from '../../../../../core/services'

@Component({
  moduleId: module.id,
  selector: 'place-detail-infos',
  templateUrl: './infos.html'
})
export class PlaceDetailInfosComponent implements OnInit {
  protected place:any;

  public constructor(private dataService:DataService) { }

  public ngOnInit() {
    this.place = this.dataService.getPlace();
  }
}