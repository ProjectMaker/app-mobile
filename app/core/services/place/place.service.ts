import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PlaceService {
  private places:Array<any>;
  private favorites:Array<any> = [];

  public searchPlaces(position:any):Array<any> {
    const places = require('./search-places.near.mock.json');

    return places;
  }

  public searchPlaceById(id:string) {
    const places = require('./search-places.id.mock.json');

    return places.find(place => place.placeId === id);
  }

  public getPlace(id:number):any {
    return this.getPlaces().find(place => place._id === id);
  }

  public getPlaces():Array<any> {
    if (!this.places) this.places = require('./places.mock.json');

    return this.places;
  }

  public addPlace(place:any) {
    if (this.places) this.places.push(place);
  }
}