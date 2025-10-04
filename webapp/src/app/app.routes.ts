import { Routes } from '@angular/router';
import { AuthGuard, NotAuthGuard } from './utils/auth.guard';

export const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '',
    loadComponent: () => import('./components/home.component').then((m) => m.HomeComponent),
  },
  {
    canActivate: [NotAuthGuard],
    path: 'login',
    loadComponent: () => import('./components/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
