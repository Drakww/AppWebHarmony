import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutPage } from './pages/dashboard-layout-page/dashboard-layout-page';

//localhost:4200/dashboard
const routes: Routes = [
  {
    path:'',
    component: DashboardLayoutPage,
    children: [
      {
        path: 'estudiantes',
        loadChildren: () => import('../estudiante/estudiante-module').then(m => m.EstudianteModule)
      },
      {
        path: 'taller',
        loadChildren: () => import('../taller/taller-module').then(m=>m.TallerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
