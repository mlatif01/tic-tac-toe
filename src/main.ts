import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// configure amplify authentication
Amplify.configure({
  Auth: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_qRdMI4QGp',
      userPoolWebClientId: '193l2qgeu9o51qpmboddhda5kk',
  }
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
