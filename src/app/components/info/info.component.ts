import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
status :string = "sunny";
weather : any ;
name:string="";
  constructor(private weatherService : WeatherService ,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
this.name = this.route.snapshot.paramMap.get('name');
  this.getCity(this.name)
  }

  getCity(city) {
    this.weatherService.getWeatherDatabyName(city).subscribe(data => {
      this.weather = data
      console.log(data)}
      )
  }
}
