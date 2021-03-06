import { Component } from '@angular/core';

import { HomeComponent } from './home.component';

@Component({
  moduleId: module.id,
  selector: 'app-layout-home',
  template: '<app-layout [ComponentClass]="ComponentClass"></app-layout>'
})
export class LayoutComponent {
  public ComponentClass:Component = HomeComponent;
}
