import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { routes, navigatableComponents } from "./home.routing";

import { HomeComponent } from './components/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ...navigatableComponents
  ],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  providers: [

  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
