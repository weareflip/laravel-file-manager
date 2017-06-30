import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SharedModule } from "./shared/shared.module";
import { DetailsComponent } from "./manager/details.component";
import { DirectoryComponent } from "./manager/directory.component";
import { InfoComponent } from "./manager/info.component";
import { ManagerComponent } from "./manager.component";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
  ],
  declarations: [
    DetailsComponent,
    DirectoryComponent,
    InfoComponent,
    ManagerComponent,
  ],
  bootstrap: [ManagerComponent]
})
export class ManagerModule { }
