import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { dashboardRouting } from "./dashboard.routes";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    dashboardRouting
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
