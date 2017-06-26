import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";

import { DetailsComponent } from "./manager/details.component";
import { DirectoryComponent } from "./manager/directory.component";
import { InfoComponent } from "./manager/info.component";
import { ManagerComponent } from "./manager.component";
import { UploadComponent } from "./upload/upload.component";

import { FileValueAccessor } from "./upload/validation/file-value-accessor.directive";
import { RequiredFileValidator } from "./upload/validation/required-file.validator";

const DECLARATIONS: any = [
  // Component
  DetailsComponent,
  DirectoryComponent,
  InfoComponent,
  ManagerComponent,
  UploadComponent,

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
