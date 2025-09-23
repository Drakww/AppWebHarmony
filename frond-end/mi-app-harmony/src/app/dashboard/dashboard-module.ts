import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { SharedModule } from '../shared/shared-module';
import { DashboardLayoutPage } from './pages/dashboard-layout-page/dashboard-layout-page';
import { EstudianteModule } from '../estudiante/estudiante-module';


@NgModule({
  declarations: [
    DashboardLayoutPage
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    EstudianteModule
  ]
})
export class DashboardModule { }
