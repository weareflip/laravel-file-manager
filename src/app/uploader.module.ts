import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";

import { UploadComponent } from "./upload/upload.component";
import { UploaderComponent } from "./uploader.component";

import { FileValueAccessor } from "./upload/validation/file-value-accessor.directive";
import { RequiredFileValidator } from "./upload/validation/required-file.validator";

const DECLARATIONS: any = [
  // Component
  UploadComponent,
  UploaderComponent,

  // Validation
  FileValueAccessor,
  RequiredFileValidator,
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
