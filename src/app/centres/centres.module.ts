import { CentreRoutingModule } from './centres-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentreListComponent } from './centre-list/centre-list.component';
import { CentresComponent } from './centres.component';
import { CentreDetailComponent } from './centre-detail/centre-detail.component';
import { CentreHomeComponent } from './centre-home/centre-home.component';


@NgModule({
  imports: [
    CommonModule,
    CentreRoutingModule
  ],
  declarations: [CentreListComponent, CentresComponent, CentreDetailComponent, CentreHomeComponent]
})
export class CentresModule { }
