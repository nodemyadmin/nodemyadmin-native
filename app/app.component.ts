import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { TextField } from "ui/text-field";
import { ActionBar } from "ui/action-bar";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  @ViewChild("signInContainer") signInContainer: ElementRef;
  @ViewChild("logoContainer") logoContainer: ElementRef;

  ngOnInit() { }

  onSignIn() {
    console.log('Sign In');
  }

}
