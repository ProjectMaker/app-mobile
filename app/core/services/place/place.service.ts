import { Injectable } from "@angular/core";
import { UUID } from 'angular2-uuid';

@Injectable()
export class PlaceService {
  private places:Array<any>;
  public getPlace(id:number):any {
    return this.getPlaces().find(place => place._id === id);
  }

  public getPlaces():Array<any> {
    if (!this.places) this.places = require('./places.mock.json');

    return this.places;
  }

  public addPlace(place:any, experiences:any) {
    if (this.places) {
      experiences.createdAt = new Date().toJSON();
      if (place._id) {
        const oldPlace = this.places.find(_place => _place._id === place._id);
        oldPlace.myExperiences.push(experiences);
      } else {
        place._id = UUID.UUID();
        place.myExperiences = [experiences];
        this.places.push(place);
      }
    }
  }
}