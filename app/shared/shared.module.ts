import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular"
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

import { LayoutComponent, ActionBarComponent, MenuComponent } from './components/layout';
import { CardPlaceComponent } from './components/card/place/card-place.component';
import { PIPES } from './pipes';

@NgModule({
  declarations: [
    LayoutComponent,
    ActionBarComponent,
    MenuComponent,
    CardPlaceComponent,
    ...PIPES
  ],
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    TNSCheckBoxModule,
  ],
  exports: [
    LayoutComponent,
    CardPlaceComponent,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    TNSCheckBoxModule,
    ...PIPES
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}