import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";

import { DetailsComponent } from "./manager/details.component";
import { DirectoryComponent } from "./manager/directory.component";
import { InfoComponent } from "./manager/info.component";
import { ManagerComponent } from "./manager.component";

const DECLARATIONS: any = [
  DetailsComponent,
  DirectoryComponent,
  InfoComponent,
  ManagerComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS,
  ],
  bootstrap: [ManagerComponent]
})
export class ManagerModule { }
