import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PlaceService {
  private places:Array<any>;
  private favorites:Array<any> = [];

  public searchPlaces(position:any):Array<any> {
    const places = require('./search-places.mock.json');

    return places;
  }

  public getPlace():any {
    const place = {
      _id: 1, name: 'Le bouillon belge',
      address: {
        streetNumber: '46',
        route: 'rue des haies',
        city: 'Paris',
        postalCode: '75020'
      },
      phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    };

    return place;
  }

  public getPlaces():Array<any> {
    if (!this.places) this.places = require('./places.mock.json');

    return this.places;
  }
}