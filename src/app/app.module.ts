import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ChartDailyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
