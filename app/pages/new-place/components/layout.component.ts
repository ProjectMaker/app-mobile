import { Component } from '@angular/core';

import { NewPlaceComponent } from './new-place/new-place.component';

@Component({
  moduleId: module.id,
  selector: 'app-layout-home',
  template: '<app-layout [ComponentClass]="ComponentClass"></app-layout>'
})
export class LayoutComponent {
  public ComponentClass:Component = NewPlaceComponent;
}
