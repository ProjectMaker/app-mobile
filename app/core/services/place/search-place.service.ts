import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { UUID } from 'angular2-uuid';

@Injectable()
export class SearchPlaceService {
  private places:Array<any>;

  public searchPlaces(position:any):Array<any> {
    const places = require('./search-place.near.mock.json');

    return places;
  }

  public searchPlaceById(id:string) {
    const places = require('./search-place.id.mock.json');
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
}