import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { routes, navigatableComponents } from "./home.routing";

import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  entryComponents: [ HomeComponent ],
  declarations: [
    HomeComponent,
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
export class HomeModule {}
