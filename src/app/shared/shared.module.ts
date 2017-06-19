import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HttpService } from "./http.service";
import { FilesystemService } from "../manager/filesystem/filesystem.service";
import { UploadService } from "../manager/upload/upload.service";

const MODULES: any = [
  CommonModule,
  FormsModule,
];

const DECLARATIONS: any = [

];

const PROVIDERS: any = [
  HttpService,
  FilesystemService,
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
