import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SharedModule } from "./shared/shared.module";
import { UploaderComponent } from "./uploader.component";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
  ],
  declarations: [
    UploaderComponent,
  ],
  bootstrap: [UploaderComponent]
})
export class UploaderModule { }
