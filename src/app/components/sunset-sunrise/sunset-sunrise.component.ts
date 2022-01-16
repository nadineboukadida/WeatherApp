import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-sunset-sunrise',
  templateUrl: './sunset-sunrise.component.html',
  styleUrls: ['./sunset-sunrise.component.css'],
})
export class SunsetSunriseComponent implements OnInit {
  data: any ;
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.data = this.weatherService
      .getWeatherDatabyName(this.route.snapshot.paramMap.get('name'))
      .subscribe((e) => {
        this.data = e;
        this.weatherService
          .getMoreDatabyName(this.data.coord.lat, this.data.coord.lon)
          .subscribe((e) => {
            this.data = e;
          });
      });
  }
}
