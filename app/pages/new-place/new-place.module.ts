import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { routes, navigatableComponents } from "./new-place.routing";

import { NewPlaceComponent } from './components/new-place/new-place.component';
import { NewPlaceInfosComponent } from './components/new-place-infos/new-place-infos.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  entryComponents: [ NewPlaceComponent, NewPlaceInfosComponent ],
  declarations: [
    NewPlaceComponent,
    NewPlaceInfosComponent,
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
export class NewPlaceModule {}
