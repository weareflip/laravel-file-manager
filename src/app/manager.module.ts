import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";

import { ManagerComponent } from "./manager.component";
import { TreeComponent } from "./tree/tree.component";
import { UploadForm } from "./upload/upload.form";

import { FileValueAccessor } from "./upload/validation/file-value-accessor.directive";
import { RequiredFileValidator } from "./upload/validation/required-file.validator";
import { ProgressBarComponent } from "./upload/progress-bar.component";

const DECLARATIONS: any = [
  // Component
  ManagerComponent,
  TreeComponent,
  UploadForm,
  ProgressBarComponent,

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
  bootstrap: [ManagerComponent]
})
export class ManagerModule { }
