import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UploaderModuleNgFactory } from "./app/uploader.module.ngfactory";
import { enableProdMode } from '@angular/core';

import './fonts';
import './images';
import './icons.json';
import './styles.scss';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModuleFactory(UploaderModuleNgFactory);
