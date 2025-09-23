import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Page } from './pages/error404-page/error404-page';
import { Header } from './components/header/header/header';
import { Footer } from './components/footer/footer/footer';
import { Sidebar } from './components/sidebar/sidebar/sidebar';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Error404Page,
    Header,
    Footer,
    Sidebar
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Error404Page,
    Header,
    Footer,
    Sidebar
  ]
})
export class SharedModule { }
