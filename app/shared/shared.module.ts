import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular"
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ngx-fonticon';

import { LayoutComponent, ActionBarComponent, MenuComponent } from './components/layout';
import { CardPlaceComponent } from './components/card/place/card-place.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';

import { PIPES } from './pipes';

@NgModule({
  declarations: [
    LayoutComponent,
    ActionBarComponent,
    MenuComponent,
    CardPlaceComponent,
    NewsFeedComponent,
    BottomBarComponent,
    FloatButtonComponent,
    ...PIPES
  ],
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    TNSFontIconModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    TNSCheckBoxModule,
  ],
  exports: [
    LayoutComponent,
    CardPlaceComponent,
    NewsFeedComponent,
    BottomBarComponent,
    FloatButtonComponent,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    TNSCheckBoxModule,
    TNSFontIconModule,
    ...PIPES
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}