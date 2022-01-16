import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarParentComponent } from './bar/bar-parent/bar-parent.component';
// import { ChartComponent } from './components/chart/chart.component';
import { InfoComponent } from './components/info/info.component';
import { LostpageComponent } from './Pages/lostpage/lostpage.component';
import { WorldmapComponent } from './Pages/worldmap/worldmap.component';

const routes: Routes = [

{ path: 'info/:name', component: InfoComponent },

{ path: 'test', component: BarParentComponent },
{ path: 'chart', component: WorldmapComponent },
{ path: '', redirectTo:'info/amsterdam' , pathMatch: 'full' },

{ path: '**', component: LostpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
