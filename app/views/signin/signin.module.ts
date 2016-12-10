import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { signInRouting } from "./signin.routes";
import { SignInComponent } from "./signin.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    signInRouting
  ],
  declarations: [
    SignInComponent
  ]
})
export class SignInModule { }
