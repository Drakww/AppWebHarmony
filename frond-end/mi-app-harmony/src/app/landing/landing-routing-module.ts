import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contacto } from './pages/contacto/contacto';
import { LandingLayoutPage } from './pages/landing-layout-page/landing-layout-page';
import { Inscripcion } from './pages/inscripcion/inscripcion/inscripcion';

//localhost:4200/landing
const routes: Routes = [
  {
    path: '',
    component: LandingLayoutPage,
    children: [
      {
        path: '', component: Home
      },
      {
        path: 'about', component: About
      },
      {
        path: 'contact', component: Contacto
      },
      {
        path: 'inscripcion', component: Inscripcion
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
