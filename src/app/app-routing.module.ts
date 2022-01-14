import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [{ path: 'chart', component: ChartComponent },
{ path: 'info', component: InfoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
