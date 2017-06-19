import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpService } from "./http.service";
import { FilesystemService } from "../manager/filesystem/filesystem.service";
import { CommonModule } from "@angular/common";

const MODULES: any = [
  CommonModule
];

const DECLARATIONS: any = [

];

const PROVIDERS: any = [
  HttpService,
  FilesystemService
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
