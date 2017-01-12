
import { RouterModule, Routes } from '@angular/router';
import { VersionHomeComponent } from './version-home/version-home.component';
import { VersionsComponent } from './versions.component';
import { VersionListComponent } from './version-list/version-list.component';
import { VersionDetailComponent } from './version-detail/version-detail.component';

export const VERSION_ROUTES: Routes = [
    {
        path: '', component: VersionHomeComponent     
    },
    {
        path: 'list', component: VersionListComponent
    }
];

