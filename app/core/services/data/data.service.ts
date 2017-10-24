import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class DataService {
  public getPlace():any {
    const place = {
      _id: 1, name: 'Le bouillon belge',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    };

    return place;
  }
}