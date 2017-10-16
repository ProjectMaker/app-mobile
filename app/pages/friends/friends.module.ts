import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { routes, navigatableComponents } from "./friends.routing";

import { FriendsComponent } from './components/friends/friends.component';
import { FriendComponent } from './components/friend/friend.component';
import { FriendAddComponent } from './components/friend-add/friend-add.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  entryComponents: [ FriendsComponent, FriendComponent, FriendAddComponent ],
  declarations: [
    FriendsComponent,
    FriendComponent,
    FriendAddComponent,
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
