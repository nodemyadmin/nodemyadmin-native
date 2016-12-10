import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { TextField } from "ui/text-field";
import { ActionBar } from "ui/action-bar";
import { Image } from "ui/image";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  @ViewChild("logoContainer") logoContainer: ElementRef;
  @ViewChild("signInContainer") signInContainer: ElementRef;

  ngOnInit() {

  }

  onSignIn() {
    console.log('Sign In');
  }

}
