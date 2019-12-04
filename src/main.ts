import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify, { Auth } from 'aws-amplify';

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
  },
  API: {
    endpoints: [
      {
        name: 'tictactoe',
        endpoint: 'https://p8iyqk0j8h.execute-api.us-east-1.amazonaws.com/dev/games',
        custom_header: async () => {
          return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
        }
      }
    ]
  }
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
