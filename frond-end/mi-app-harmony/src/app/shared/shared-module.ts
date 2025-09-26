import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Page } from './pages/error404-page/error404-page';
import { Header } from './components/header/header/header';
import { Footer } from './components/footer/footer/footer';
import { Sidebar } from './components/sidebar/sidebar/sidebar';
import { RouterModule } from '@angular/router';
import { ConfirmModal } from './components/confirm-modal/confirm-modal';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    Error404Page,
    Header,
    Footer,
    Sidebar,
    ConfirmModal
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModalModule
  ],
  exports: [
    Error404Page,
    Header,
    Footer,
    Sidebar,
    ConfirmModal
  ]
})
export class SharedModule { }
