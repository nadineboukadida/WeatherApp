import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
search  : string =""
name=""
  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
    if(this.weatherService.weather)
      alert(this.weatherService.weather)
  }
   
  onKey(event:any) {
   this.search=event.target.value;
  }
  
}
