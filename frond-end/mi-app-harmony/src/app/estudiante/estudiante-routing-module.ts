import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteLayoutPage } from './pages/estudiante-layout-page/estudiante-layout-page';
import { EstudianteListPage } from './pages/estudiante-list-page/estudiante-list-page';
import { EstudianteNewPage } from './pages/estudiante-new-page/estudiante-new-page';

//localhost:4200/estudiante
const routes: Routes = [
  {
    path: '',
    component: EstudianteLayoutPage,
    children: [
      {
        path: 'list', component:EstudianteListPage
      },
      {
        path:'new', component: EstudianteNewPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
