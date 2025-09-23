import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TallerRoutingModule } from './taller-routing-module';
import { TallerLayoutPage } from './pages/taller-layout-page/taller-layout-page';
import { TallerListPage } from './pages/taller-list-page/taller-list-page';
import { TallerNewPage } from './pages/taller-new-page/taller-new-page';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    TallerLayoutPage,
    TallerListPage,
    TallerNewPage
  ],
  imports: [
    CommonModule,
    TallerRoutingModule,
    FormsModule,
    ReactiveFormsModule
]
})
export class TallerModule { }
