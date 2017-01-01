import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";
import { ActionBar } from "ui/action-bar";
import { Image } from "ui/image";

@Component({
  selector: "my-settings",
  templateUrl: "views/settings/settings.component.html",
  styleUrls: [ "views/settings/settings.component.css" ]
})
export class SettingsComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  onSignIn() {
    this.router.navigate(["/settings"]);
  }

}
