import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PlaceService {
  public getPlace():any {
    const place = {
      _id: 1, name: 'Le bouillon belge',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    };

    return place;
  }

  public getPlaces():Array<any> {
    const places = [{
      _id: 1, name: 'Le bouillon belge',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    },{
      _id: 2, name: 'Paris Hanoi',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    },{
      _id: 3, name: 'Train bleu',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    }];

    return places;
  }
}