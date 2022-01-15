import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-prediction-bar',
  templateUrl: './prediction-bar.component.html',
  styleUrls: ['./prediction-bar.component.css']
})
export class PredictionBarComponent implements OnInit {
  weather:any ;
  name:string;
predictions = [{date:"16 January 2022" , number : 22 , weather :"sunny"},{date:"1 January 2022" , number : 2 , weather :"rainy"},
{date:"1 January 2022" , number : 2 , weather :"cloudy"}]

  constructor(private weatherService : WeatherService) { 
  }

  ngOnInit(): void { 
    this.getCity(this.weatherService.name);
   
  }
  getInfo (lat , lon ){
this.weatherService.getMoreDatabyName(lat , lon).subscribe(e => {this.weather=e
  this.predictions=this.weather.daily;
  this.predictions=this.predictions.slice(1,4)
  console.log(this.predictions)
  

} ) ; 
  }
  getCity (name) {
    this.weatherService.getWeatherDatabyName(name).subscribe(data => {
      this.weather = data;
      this.getInfo(this.weather.coord.lat ,this.weather.coord.lon)
  })}

}
