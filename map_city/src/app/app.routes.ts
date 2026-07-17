import { Routes } from '@angular/router';
import { MapaUrbanoPageComponent } from './features/mapa-urbano/pages/mapa-urbano-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MapaUrbanoPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
