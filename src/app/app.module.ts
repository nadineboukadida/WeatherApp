import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { IconComponent } from './components/icon/icon.component';
import { HeaderComponent } from './components/header/header.component';
import { BigboxComponent } from './components/box/bigbox/bigbox.component';
import { SmallboxComponent } from './components/box/smallbox/smallbox.component';
import { SmallIconsComponent } from './components/box/small-icons/small-icons.component';
import { TempComponent } from './components/box/temp/temp.component';
import { LargeBoxComponent } from './components/box/large-box/large-box.component';
import { TallBoxComponent } from './components/box/tall-box/tall-box.component';
import { SideinfosComponent } from './components/sideinfos/sideinfos.component';
import { PredictionBarComponent } from './components/Prediction/prediction-bar/prediction-bar.component';
import { PredictionElementComponent } from './components/Prediction/prediction-element/prediction-element.component';
import { ChartDailyComponent } from './components/chart-daily/chart-daily.component';
import { HttpClientModule } from '@angular/common/http';
import { SunsetSunriseComponent } from './components/sunset-sunrise/sunset-sunrise.component';
import { SSinfoComponent } from './components/sunset-sunrise/ssinfo/ssinfo.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { ListComponent } from './worldmap/list/list.component';
import { CityItemComponent } from './worldmap/list/city-item/city-item.component';
@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    SideBarComponent,
    IconComponent,
    HeaderComponent,
    BigboxComponent,
    SmallboxComponent,
    SmallIconsComponent,
    TempComponent,
    LargeBoxComponent,
    TallBoxComponent,
    SideinfosComponent,
    PredictionBarComponent,
    PredictionElementComponent,
    ChartDailyComponent,
    SunsetSunriseComponent,
    SSinfoComponent,
    WorldmapComponent,
    ListComponent,
    CityItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGbE7ZeIXwxPqPYYKd8g8vL-ocz9OqtY8',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
