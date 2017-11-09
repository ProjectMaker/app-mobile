import { Component, OnInit } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

import { PlaceService } from '../../../../../core/services'

@Component({
  moduleId: module.id,
  selector: 'place-detail-my-experiences',
  templateUrl: './my-experiences.html'
})
export class PlaceDetailMyExperiencesComponent implements OnInit {
  protected place:any;

  public constructor(private placeService:PlaceService, private pageRoute:PageRoute, private fonticon:TNSFontIconService) { }

  public ngOnInit() {
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .subscribe(
        (params) => {
          this.place = this.placeService.getPlace(parseInt(params['id']));
        }
      );
  }
}