import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { GraphComponent } from './graph/graph.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'graph',
    component: GraphComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }