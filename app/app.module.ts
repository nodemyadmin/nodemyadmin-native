import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";
import { SignInModule } from "./views/signin/signin.module";
import { DashboardModule } from "./views/dashboard/dashboard.module";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
      NativeScriptModule,
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(appRoutes),
      SignInModule,
      DashboardModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
