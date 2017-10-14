import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular"

import { LayoutComponent, ActionBarComponent, MenuComponent } from './components/layout';

@NgModule({
  declarations: [
    LayoutComponent,
    ActionBarComponent,
    MenuComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule
  ],
  exports: [
    LayoutComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}