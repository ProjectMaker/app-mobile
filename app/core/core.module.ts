import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { APP_SERVICES } from './services';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,

    //CoreStoreModule,
    //HttpModule,
    //SharedModule,
    //RouterModule,
  ],
  declarations: [

  ],
  exports: [
    //CoreStoreModule,

  ],
  providers: [
    ...APP_SERVICES
  ]
})
export class CoreModule {}
