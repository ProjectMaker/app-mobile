import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
//import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular"

import { MenuComponent } from './components/menu/menu.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';

@NgModule({
  imports: [
    NativeScriptModule,
    //NativeScriptUISideDrawerModule

    //CoreStoreModule,
    //HttpModule,
    //SharedModule,
    //RouterModule,
  ],
  declarations: [
    MenuComponent,
    ActionBarComponent
  ],
  exports: [
    //CoreStoreModule,
    MenuComponent,
    ActionBarComponent
  ],
  providers: [
    //...APP_SERVICES
  ]
})
export class CoreModule {}
