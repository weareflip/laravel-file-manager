import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ClipboardDirective } from "./utility/clipboard.directive";
import { DropzoneDirective } from "../upload/dropzone.directive";
import { ProgressBarComponent } from "../upload/progress-bar.component";

import { FilesystemService } from "../filesystem/filesystem.service";
import { ManagerService } from "../manager/manager.service";
import { UploadService } from "../upload/upload.service";

const MODULES: any = [
  CommonModule,
  FormsModule,
];

const DECLARATIONS: any = [
  ClipboardDirective,
  DropzoneDirective,
  ProgressBarComponent,
];

const PROVIDERS: any = [
  FilesystemService,
  ManagerService,
  UploadService,
];


@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...MODULES,
    ...DECLARATIONS,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...PROVIDERS,
      ]
    }
  }
}
