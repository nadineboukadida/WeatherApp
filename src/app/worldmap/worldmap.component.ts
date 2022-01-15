import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css'],
})
export class WorldmapComponent implements OnInit {
  lat: any;
  lon: any;
  weather: any;
map : any
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey : "AIzaSyAGbE7ZeIXwxPqPYYKd8g8vL-ocz9OqtY8"
    })
    loader.load().then(()=> {
      this.map = new google.maps.Map(document.getElementById("map"), {
      
        zoom: 6,
      })
    })
  }
  geoLocation() {}
}
