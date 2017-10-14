import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular"

import { AppComponent } from "./app.component";
import { HomeModule } from './pages/home/home.module';
import { NewPlaceModule } from './pages/new-place/new-place.module';
import { FriendsModule } from './pages/friends/friends.module';
import { PlacesModule } from './pages/places/places.module';
import { SharesModule } from './pages/shares/shares.module';
import { ProfileModule } from './pages/profile/profile.module';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptUISideDrawerModule,
    CoreModule,
    HomeModule,
    NewPlaceModule,
    FriendsModule,
    PlacesModule,
    SharesModule,
    ProfileModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
