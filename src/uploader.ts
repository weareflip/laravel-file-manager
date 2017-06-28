import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UploaderModule } from "./app/uploader.module";
import { enableProdMode } from '@angular/core';

import './fonts';
import './images';
import './icons.json';
import './styles.scss';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(UploaderModule);
