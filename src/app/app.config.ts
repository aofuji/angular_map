import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { incidentsEffects } from './features/urban-map/store/incidents.effects';
import { incidentsReducer } from './features/urban-map/store/incidents.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      incidents: incidentsReducer
    }),
    provideEffects({
      incidentsEffects
    })
  ]
};
