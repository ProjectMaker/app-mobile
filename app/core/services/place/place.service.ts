import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { UUID } from 'angular2-uuid';

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
    const place = places.find(place => place.placeId === id);

    const newPlace = {
      name: place.name,
      location: place.geometry.location,
      placeId: place.placeId,
      phone: place.international_phone_number,
      address: {
        streetNumber: '',
        route: '',
        city: '',
        postalCode: '',
        country: ''
      },
      openingHours: []
    };

    place.address_components.forEach(component => {
      if (component.types.indexOf('street_number') > -1) newPlace.address.streetNumber = component.long_name;
      if (component.types.indexOf('route') > -1) newPlace.address.route = component.long_name;
      if (component.types.indexOf('locality') > -1) newPlace.address.city = component.long_name;
      if (component.types.indexOf('postal_code') > -1) newPlace.address.postalCode = component.long_name;
      if (component.types.indexOf('country') > -1) newPlace.address.country = component.long_name;
    });

    if (place.opening_hours) {
      newPlace.openingHours = place.opening_hours.periods.map(period => {
        return { day: period.open.day, open: period.open.time, close: period.close.time };
      })
    }
    return newPlace;
  }

  public getPlace(id:number):any {
    return this.getPlaces().find(place => place._id === id);
  }

  public getPlaces():Array<any> {
    if (!this.places) this.places = [];//require('./places.mock.json');

    return this.places;
  }

  public addPlace(place:any, experiences:any) {
    if (this.places) {
      if (place._id) {
        const oldPlace = this.places.find(_place => _place._id === place.id);
        oldPlace.experiences.push(experiences);
      } else {
        place.experiences = [experiences];
        this.places.push(place);
      }
    }
  }
}