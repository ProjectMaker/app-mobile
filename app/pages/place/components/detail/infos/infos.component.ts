import { Component, OnInit } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

import { PlaceService } from '../../../../../core/services'

@Component({
  moduleId: module.id,
  selector: 'place-detail-infos',
  templateUrl: './infos.html'
})
export class PlaceDetailInfosComponent implements OnInit {
  protected place:any;

  public constructor(private placeService:PlaceService, private pageRoute:PageRoute, private fonticon:TNSFontIconService) { }

  public ngOnInit() {
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .subscribe(
        (params) => {
          this.place = this.placeService.getPlace(params['id']);
        }
      );
  }
}