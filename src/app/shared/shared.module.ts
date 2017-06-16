import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpService } from "./http.service";
import { FilesystemService } from "../manager/filesystem.service";

const MODULES: any = [

];

const DECLARATIONS: any = [

];

const PROVIDERS: any = [
  HttpService,
  FilesystemService
];


@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...MODULES,
    ...DECLARATIONS
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...PROVIDERS
      ]
    }
  }
}
