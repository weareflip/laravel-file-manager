import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { ManagerComponent } from "./manager.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { UploadForm } from "./upload/upload.form";

import { FileValueAccessor } from "./upload/validation/file-value-accessor.directive";
import { RequiredFileValidator } from "./upload/validation/required-file.validator";
import { ProgressBarComponent } from "./upload/progress-bar.component";

const DECLARATIONS: any = [
  // Component
  ManagerComponent,
  SidebarComponent,
  UploadForm,
  ProgressBarComponent,

  // Validation
  FileValueAccessor,
  RequiredFileValidator,
];

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS,
  ]
})
export class ManagerModule { }
