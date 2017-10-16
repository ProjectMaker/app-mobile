import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular"

import { LayoutComponent, ActionBarComponent, MenuComponent } from './components/layout';
import { CardPlaceComponent } from './components/card/place/card-place.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ActionBarComponent,
    MenuComponent,
    CardPlaceComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule
  ],
  exports: [
    LayoutComponent,
    CardPlaceComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}