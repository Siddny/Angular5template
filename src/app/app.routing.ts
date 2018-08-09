import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';

const appRoute: Routes = [
  {
    path: '',
    component: LandingComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'landing',
    component: LandingComponent,
    // canActivate: [AuthGuard],
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);
