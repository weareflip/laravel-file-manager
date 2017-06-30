import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ClipboardDirective } from "./utility/clipboard.directive";

import {
  DropzoneDirective,
  ProgressBarComponent,
  UploadComponent
} from "../upload";

import {
  RequiredFileValidator,
  FileValueAccessor
} from "../upload/validation";

import { FilesystemService } from "../filesystem/filesystem.service";
import { ManagerService } from "../manager/manager.service";
import { UploadService } from "../upload/upload.service";

const MODULES: any = [
  CommonModule,
  FormsModule,
];

const DECLARATIONS: any = [
  // Utility
  ClipboardDirective,

  // Upload
  DropzoneDirective,
  ProgressBarComponent,
  UploadComponent,
  FileValueAccessor,
  RequiredFileValidator,
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
