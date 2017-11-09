import { Component, OnInit } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { RouterExtensions } from 'nativescript-angular/router';

import { PlaceService } from '../../../../../core/services'

@Component({
  moduleId: module.id,
  selector: 'place-detail-my-experiences',
  templateUrl: './my-experiences.html'
})
export class PlaceDetailMyExperiencesComponent implements OnInit {
  protected place:any;

  public constructor(private placeService:PlaceService,
                     private pageRoute:PageRoute,
                     private routerExtensions:RouterExtensions,
                     private fonticon:TNSFontIconService) { }

  public ngOnInit() {
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .subscribe(
        (params) => {
          this.place = this.placeService.getPlace(params['id']);
        }
      );
  }

  protected onGoToAdd() {
    this.routerExtensions.navigate(['new-place', this.place._id, 'infos'], { clearHistory: true, queryParams: { new: 0 } });
  }
}