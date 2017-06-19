import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ManagerModule } from "./app/manager.module";
import { enableProdMode } from '@angular/core';

import './fonts';
import './images';
import './styles.scss';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ManagerModule);
