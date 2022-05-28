import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, TitleStrategy } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PageTitleStrategy, routes } from './app/app.routes';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([HttpClientModule, RouterModule.forRoot(routes)]),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
  ],
});
