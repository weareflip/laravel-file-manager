import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UploaderModule } from "./app/uploader.module";
import { enableProdMode } from '@angular/core';

/**
 * zone.js MUST be imported AFTER AppModule/AppModuleNgFactory, otherwise it will throw
 * error "ZoneAware promise has been overridden" during bootstrapping
 * @see https://github.com/angular/zone.js/issues/465
 */
import 'zone.js/dist/zone';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(UploaderModule);
