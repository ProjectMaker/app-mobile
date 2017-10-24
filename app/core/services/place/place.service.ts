import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PlaceService {
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
    const places = [{
      _id: 1, name: 'Le bouillon belge',
      address: {
        streetNumber: '46',
        route: 'rue des haies',
        city: 'Paris',
        postalCode: '75020'
      },
      phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    },{
      _id: 2, name: 'Paris Hanoi',
      address: {
        streetNumber: '46',
        route: 'rue des haies',
        city: 'Paris',
        postalCode: '75020'
      },
      phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    },{
      _id: 3, name: 'Train bleu',
      address: {
        streetNumber: '46',
        route: 'rue des haies',
        city: 'Paris',
        postalCode: '75020'
      },
      phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    }];

    return places;
  }
}