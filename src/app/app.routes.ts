import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./contact-us/contact-us.component').then(
        (c) => c.ContactUsComponent
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.routes').then((m) => m.aboutRoutes),
  },
];
