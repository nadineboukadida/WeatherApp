import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-sideinfos',
  templateUrl: './sideinfos.component.html',
  styleUrls: ['./sideinfos.component.css'],
})
export class SideinfosComponent implements OnInit {
  weather: any;
  name: string ="";
  @Input() show = true;
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
    this.weather = this.weatherService
      .getWeatherDatabyName(this.route.snapshot.paramMap.get('name'))
      .subscribe((e) => {
        this.weather = e;
      },
      (err)=> {console.log("error in sidebar")});
  }

  ngOnInit(): void {}
}
