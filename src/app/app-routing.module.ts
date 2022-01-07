import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyPageComponent } from './empty-page/empty-page.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TeachingSubjectComponent } from './teaching-subject/teaching-subject.component';
import { ContactComponent } from './contact/contact.component';

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
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'subject/:code',
    component: TeachingSubjectComponent,
    data: { title: 'Teaching' }
  },
  {
    path: '**',
    component: EmptyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
