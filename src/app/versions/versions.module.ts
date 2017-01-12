import { VersionService } from './version.service';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VersionsComponent } from './versions.component';
import { VersionListComponent } from './version-list/version-list.component';
import { VersionDetailComponent } from './version-detail/version-detail.component';
import { VersionHomeComponent } from './version-home/version-home.component';
import { VersionFormComponent } from './version-form/version-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  declarations: [VersionsComponent, VersionListComponent, VersionDetailComponent, VersionHomeComponent, VersionFormComponent],
  providers: [VersionService]
})
export class VersionsModule { }
