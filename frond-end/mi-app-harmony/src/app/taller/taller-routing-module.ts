import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TallerLayoutPage } from './pages/taller-layout-page/taller-layout-page';
import { TallerListPage } from './pages/taller-list-page/taller-list-page';
import { TallerNewPage } from './pages/taller-new-page/taller-new-page';

const routes: Routes = [
  {
    path: '',
    component: TallerLayoutPage,
    children: [
      {
        path: '',
        component: TallerListPage,
        children: [
          { path: 'new', component: TallerNewPage },
          { path: 'edit/:id', component: TallerNewPage }
        ]
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TallerRoutingModule { }
