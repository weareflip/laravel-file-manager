import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UploaderModule } from "./app/uploader.module";
import { enableProdMode } from '@angular/core';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(UploaderModule);
