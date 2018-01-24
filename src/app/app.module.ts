import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BannerComponent } from './banner/banner.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { GraphComponent } from './graph/graph.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BannerComponent,
    ChartComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    GraphComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
