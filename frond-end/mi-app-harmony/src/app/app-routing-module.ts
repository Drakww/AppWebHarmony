import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Page } from './shared/pages/error404-page/error404-page';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./landing/landing-module').then(m => m.LandingModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-module').then(m => m.DashboardModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante-module').then(m => m.EstudianteModule)
  },
  {
    path: '404',
    component: Error404Page
  },
  // {
  //   //Cualquier otro path
  //   path: '**',
  //   redirectTo: '404'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
