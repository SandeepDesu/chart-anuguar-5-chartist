import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const routes: Routes = [
  { path: 'line-chart', component: LineChartComponent },
  { path: '', redirectTo: '/line-chart', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
