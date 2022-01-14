import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { InfoComponent } from './components/info/info.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { IconComponent } from './components/fixed/header/icon/icon.component';
import { HeaderComponent } from './components/fixed/header/header.component';
import { BigboxComponent } from './components/box/bigbox/bigbox.component';
import { SmallboxComponent } from './components/box/smallbox/smallbox.component';
import { SmallIconsComponent } from './components/box/small-icons/small-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    InfoComponent,
    SideBarComponent,
    IconComponent,
    HeaderComponent,
    BigboxComponent,
    SmallboxComponent,
    SmallIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
