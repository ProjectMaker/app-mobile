import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { routes, navigatableComponents } from "./place.routing";

import { PlaceListComponent } from './components/list/list.component';
import { PlaceShareComponent } from './components/share/share.component';
import { PlaceDetailComponent } from './components/detail/detail.component';
import { PlaceDetailInfosComponent } from './components/detail/infos/infos.component';
import { PlaceDetailMyExperiencesComponent } from './components/detail/my-experiences/my-experiences.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  entryComponents: [ PlaceListComponent, PlaceShareComponent, PlaceDetailComponent ],
  declarations: [
    PlaceListComponent,
    PlaceShareComponent,
    PlaceDetailComponent,
    PlaceDetailInfosComponent,
    PlaceDetailMyExperiencesComponent,
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
export class PlaceModule {}
