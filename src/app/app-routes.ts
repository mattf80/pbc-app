import { VERSION_ROUTES } from './versions/version-routing';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CentresComponent } from './centres/centres.component';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { VersionsComponent } from './versions/versions.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'versions', component: VersionsComponent, children: VERSION_ROUTES },
  { path: '**', component: NotFoundComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);
