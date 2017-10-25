import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular"

import { AppComponent } from "./app.component";
import { HomeModule } from './pages/home/home.module';
import { NewPlaceModule } from './pages/new-place/new-place.module';
import { FriendsModule } from './pages/friends/friends.module';
import { PlaceModule } from './pages/place/place.module';
import { SharesModule } from './pages/shares/shares.module';
import { ProfileModule } from './pages/profile/profile.module';

import { CoreModule } from './core/core.module';
import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ngx-fonticon';
//TNSFontIconService.debug = true;

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptUISideDrawerModule,
    TNSFontIconModule.forRoot({
      'fa': './assets/font-awesome.css',
    }),
    CoreModule,
    HomeModule,
    NewPlaceModule,
    FriendsModule,
    PlaceModule,
    SharesModule,
    ProfileModule
  ],
  providers: [

  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
