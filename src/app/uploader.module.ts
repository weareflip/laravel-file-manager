import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";

import { UploaderComponent } from "./uploader.component";

const DECLARATIONS: any = [
  UploaderComponent,
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
  bootstrap: [UploaderComponent]
})
export class UploaderModule { }
