import { CentreDetailComponent } from './centre-detail/centre-detail.component';
import { CentreListComponent } from './centre-list/centre-list.component';
import { CentresComponent } from './centres.component';
import { CentreHomeComponent } from './centre-home/centre-home.component';


import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const centreRoutes: Routes = [
  { 
      path: 'centres',  
      component: CentresComponent,
      children: [
          {
              path: 'list', component: CentreListComponent
          },
          {
              path: 'detail/:id', component: CentreDetailComponent
          },
          {
              path: '', component: CentreHomeComponent
          }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(centreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CentreRoutingModule { }