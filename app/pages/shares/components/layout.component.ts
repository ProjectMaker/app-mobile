import { Component } from '@angular/core';

import { SharesComponent } from './shares/shares.component'

@Component({
  moduleId: module.id,
  selector: 'app-layout-home',
  template: '<app-layout [ComponentClass]="ComponentClass"></app-layout>'
})
export class LayoutComponent {
  public ComponentClass:Component = SharesComponent;
}
