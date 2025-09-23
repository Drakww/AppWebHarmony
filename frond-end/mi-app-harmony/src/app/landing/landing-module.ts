import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing-module';
import { Home } from './pages/home/home';
import { Contacto } from './pages/contacto/contacto';
import { About } from './pages/about/about';
import { SharedModule } from '../shared/shared-module';
import { LandingLayoutPage } from './pages/landing-layout-page/landing-layout-page';
import { Inscripcion } from './pages/inscripcion/inscripcion/inscripcion';


@NgModule({
  declarations: [
    LandingLayoutPage,
    Home,
    Contacto,
    About,
    Inscripcion,

  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
