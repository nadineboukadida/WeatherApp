import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
more:any
weather: any
  constructor(private weatherService : WeatherService) {
    this.getCity(this.weatherService.name)
   }
  getInfo (lat , lon ){ 
    this.weatherService.getMoreDatabyName(lat , lon).subscribe(e => {this.weather=e
      this.more=this.weather.daily;
      this.more=this.more.slice(1,4)
      
    
    } ) ; 
      }
      getCity(name) {
        console.log("ccccccccccccc")

        this.weatherService.getWeatherDatabyName(name).subscribe(data => {
          this.weather = data;
          console.log("ccccccccccccc")
      })}
    
}
