import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { routes, navigatableComponents } from "./friends.routing";

import { FriendsComponent } from './components/friends/friends.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  entryComponents: [ FriendsComponent ],
  declarations: [
    FriendsComponent,
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
export class FriendsModule {}
