import { Component } from "@angular/core";
import { PlaceService } from './core/services'
@Component({
  selector: "my-app",
  template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent {
  constructor(private placeService:PlaceService) {

  }

  public ngOnInit() {
    const places = this.placeService.getPlaces();
    console.log('NB Places', places.length);
  }
}
