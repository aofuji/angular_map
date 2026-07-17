import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { ocorrenciasEffects } from './features/mapa-urbano/store/ocorrencias.effects';
import { ocorrenciasReducer } from './features/mapa-urbano/store/ocorrencias.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      ocorrencias: ocorrenciasReducer
    }),
    provideEffects({
      ocorrenciasEffects
    })
  ]
};
