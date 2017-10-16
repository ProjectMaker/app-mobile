import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { routes, navigatableComponents } from "./places.routing";

import { PlacesComponent } from './components/places/places.component';
import { PlaceShareComponent } from './components/place-share/place-share.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  entryComponents: [ PlacesComponent, PlaceShareComponent ],
  declarations: [
    PlacesComponent,
    PlaceShareComponent,
    ...navigatableComponents
  ],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),

    SharedModule
  ],
  providers: [

  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PlacesModule {}
