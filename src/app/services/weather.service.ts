import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weather: any;
  name: string = '';
  moredata: any;
  private subject = new Subject<any>();
  url = 'https://api.openweathermap.org/data/2.5/weather';
  url1 = 'https://api.openweathermap.org/data/2.5/onecall';

  apiKey = 'eddf057aa01e6fb71065e84650888946';
  // ;
  constructor(private http: HttpClient) {}
  getMoreDatabyName(lat, lon) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('exclude', 'current,alerts,minutely')
      .set('appid', this.apiKey);
    return this.http.get(this.url1, { params });
  }
  getWeatherDatabyName(name) {
    this.name = name;
    let params = new HttpParams()
      .set('q', name)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }
  getWeatherDatabylatlon(lat, lon) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }
}
