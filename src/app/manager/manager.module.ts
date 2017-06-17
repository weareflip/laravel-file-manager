import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ManagerComponent } from "./manager.component";
import { UploadForm } from "./upload/upload.form";

const DECLARATIONS: any = [
  SidebarComponent,
  ManagerComponent,
  UploadForm
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
