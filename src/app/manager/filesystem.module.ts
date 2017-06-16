import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from './filesystem.routes';
import { SharedModule } from "../shared/shared.module";
import { IndexComponent } from "./index.component";

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    IndexComponent,
  ],
  exports: [
    IndexComponent
  ]
})
export class FilesystemModule { }
