import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleGuideComponent } from "./shared/style-guide.component";
import { SharedModule } from "./shared/shared.module";
import { ManagerModule } from "./manager/manager.module";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    ManagerModule
  ],
  declarations: [
    AppComponent,
    StyleGuideComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
