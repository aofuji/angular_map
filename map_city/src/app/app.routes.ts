import { Routes } from '@angular/router';
import { UrbanMapPageComponent } from './features/urban-map/pages/urban-map-page.component';

export const routes: Routes = [
  {
    path: '',
    component: UrbanMapPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
