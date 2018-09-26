import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: 'line-chart', component: LineChartComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'demo', component: DemoComponent },
  { path: '', redirectTo: '/demo', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
