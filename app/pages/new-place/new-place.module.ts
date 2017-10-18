import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { routes, navigatableComponents } from "./new-place.routing";

import { NewPlaceSelectComponent } from './components/new-place-select/new-place-select.component';
import { NewPlaceInfosComponent } from './components/new-place-infos/new-place-infos.component';
import { NewPlaceDetailComponent, NewPlaceDetailNewsFeedComponent } from './components/new-place-detail/new-place-detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  entryComponents: [ NewPlaceSelectComponent, NewPlaceInfosComponent, NewPlaceDetailComponent, NewPlaceDetailNewsFeedComponent ],
  declarations: [
    NewPlaceSelectComponent,
    NewPlaceInfosComponent,
    NewPlaceDetailComponent,
    NewPlaceDetailNewsFeedComponent,
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
