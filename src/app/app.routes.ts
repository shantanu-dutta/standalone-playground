import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Route,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AboutTitleResolver implements Resolve<string> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string | Observable<string> | Promise<string> {
    return of('Say Hi to new title of about route :)');
  }
}

@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  constructor(@Inject(Title)private  title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    if (title !== undefined) {
      this.title.setTitle(`Company Name | ${title}`);
    }
  }
}

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
    title: AboutTitleResolver,
    loadChildren: () =>
      import('./about/about.routes').then((m) => m.aboutRoutes),
  },
];
