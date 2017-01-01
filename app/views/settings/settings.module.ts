import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { settingsRouting } from "./settings.routes";
import { SettingsComponent } from "./settings.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    settingsRouting
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule { }
