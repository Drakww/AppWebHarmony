import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing-module';
import { EstudianteLayoutPage } from './pages/estudiante-layout-page/estudiante-layout-page';
import { EstudianteListPage } from './pages/estudiante-list-page/estudiante-list-page';
import { EstudianteNewPage } from './pages/estudiante-new-page/estudiante-new-page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    EstudianteLayoutPage,
    EstudianteListPage,
    EstudianteNewPage,
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EstudianteModule { }
