import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

  // let's get the service worker going pre-angular boot
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/ngsw-worker.js');
  }
}

// eslint-disable-next-line @typescript-eslint/dot-notation
const bootFunction = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
};

const isPWA = (win) =>
  !!(win.matchMedia?.('(display-mode: standalone)').matches || (win.navigator).standalone);

if (isPWA(window)) {
  bootFunction();
  // eslint-disable-next-line @typescript-eslint/dot-notation
  window['bootAngularSPA'] = () => { };
}

if (!isPWA(window)) {
  // eslint-disable-next-line @typescript-eslint/dot-notation
  window['bootAngularSPA'] = bootFunction;
}
