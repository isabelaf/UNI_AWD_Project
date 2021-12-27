import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyPageComponent } from './empty-page/empty-page.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'portofolio',
    component: PortofolioComponent,
    data: { title: 'Portofolio' }
  },
  {
    path: '**',
    component: EmptyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
