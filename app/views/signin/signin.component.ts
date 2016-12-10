import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";
import { ActionBar } from "ui/action-bar";
import { Image } from "ui/image";

@Component({
  selector: "my-signin",
  templateUrl: "views/signin/signin.component.html",
  styleUrls: [ "views/signin/signin.component.css" ]
})
export class SignInComponent implements OnInit {
  @ViewChild("logoContainer") logoContainer: ElementRef;
  @ViewChild("signInContainer") signInContainer: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() { }

  onSignIn() {
    this.router.navigate(["/dashboard"]);
  }

}
