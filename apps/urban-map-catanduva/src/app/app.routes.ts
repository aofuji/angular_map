import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation-v4';
import { UrbanMapPageComponent } from './features/urban-map/pages/urban-map-page.component';

export const routes: Routes = [
  {
    path: '',
    component: UrbanMapPageComponent,
  },
  {
    path: 'mfe',
    loadComponent: () =>
      loadRemoteModule('urban-map-remote', './Component').then((m) => m.App),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
