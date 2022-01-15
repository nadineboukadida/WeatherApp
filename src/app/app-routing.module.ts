import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ChartComponent } from './components/chart/chart.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
{ path: 'info/:name', component: InfoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
