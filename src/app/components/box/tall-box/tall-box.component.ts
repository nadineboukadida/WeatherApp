import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-tall-box',
  templateUrl: './tall-box.component.html',
  styleUrls: ['./tall-box.component.css'],
})
export class TallBoxComponent implements OnInit {
  @Input() pic: string = '';
  weather: any;
  tomorrow: any;
  country:string;
  name:string;
  temp;
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.weather = this.weatherService
      .getWeatherDatabyName(this.route.snapshot.paramMap.get('name'))
      .subscribe((e) => {
        this.weather = e;
        this.weatherService
          .getMoreDatabyName(this.weather.coord.lat, this.weather.coord.lon)
          .subscribe((k) => {
            this.tomorrow = k;
            this.tomorrow = this.tomorrow.daily.slice(1, 2);
            console.log(this.tomorrow, 'rrr', this.weather.name);
          });
      });
  }
}
