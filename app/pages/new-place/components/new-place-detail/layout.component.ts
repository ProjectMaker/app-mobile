import { Component } from '@angular/core';

import { NewPlaceDetailComponent, NewPlaceDetailNewsFeedComponent } from './new-place-detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-layout-home',
  template: '<app-layout [ComponentClass]="ComponentClass"></app-layout>'
})
export class NewPlaceDetailLayoutComponent {
  public ComponentClass:Component = NewPlaceDetailComponent;
}

@Component({
  moduleId: module.id,
  selector: 'app-layout-home',
  template: '<app-layout [ComponentClass]="ComponentClass"></app-layout>'
})
export class NewPlaceDetailNewsFeedLayoutComponent {
  public ComponentClass:Component = NewPlaceDetailNewsFeedComponent;
}
