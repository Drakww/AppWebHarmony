import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing-module';
import { ProfesorPage } from './pages/profesor-page/profesor-page';
import { ProfesorLayoutPage } from './pages/profesor-layout-page/profesor-layout-page';
import { ProfesorListPage } from './pages/profesor-list-page/profesor-list-page';
import { ProfesorNewPage } from './pages/profesor-new-page/profesor-new-page';


@NgModule({
  declarations: [
    ProfesorLayoutPage,
    ProfesorPage,
    ProfesorListPage,
    ProfesorNewPage,
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule
  ]
})
export class ProfesorModule { }
