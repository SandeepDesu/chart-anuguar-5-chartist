import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DemoComponent } from './demo/demo.component';
import { StackedBarComponent } from './stacked-bar/stacked-bar.component';
import { GroupedBarComponent } from './grouped-bar/grouped-bar.component';
import { MultiLineComponent } from './multi-line/multi-line.component';
import { AreaComponent } from './area/area.component';
import { DonutComponent } from './donut/donut.component';
import { PopUpComponent } from './pop-up/pop-up.component';
const routes: Routes = [
  { path: 'line-chart', component: LineChartComponent },
  { path: 'donut-chart', component: DonutComponent },
  { path: 'area-chart', component: AreaComponent },
  { path: 'multi-line-chart', component: MultiLineComponent },
  { path: 'grouped-bar-chart', component: GroupedBarComponent },
  { path: 'stacked-bar-chart', component: StackedBarComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'demo', component: DemoComponent },
  { path: '', redirectTo: '/demo', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    DemoComponent,
    StackedBarComponent,
    GroupedBarComponent,
    MultiLineComponent,
    AreaComponent,
    DonutComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
  entryComponents:[PopUpComponent]
})
export class AppModule { }
