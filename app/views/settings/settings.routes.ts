import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SettingsComponent } from "./settings.component";

const settingsRoutes: Routes = [
  { path: "settings", component: SettingsComponent },
];
export const settingsRouting: ModuleWithProviders = RouterModule.forChild(settingsRoutes);
