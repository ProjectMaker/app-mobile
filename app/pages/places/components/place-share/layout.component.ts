import { Component } from '@angular/core';

import { PlaceShareComponent } from './place-share.component'

@Component({
  moduleId: module.id,
  selector: 'app-layout-home',
  template: '<app-layout [ComponentClass]="ComponentClass"></app-layout>'
})
export class LayoutComponent {
  public ComponentClass:Component = PlaceShareComponent;
}
