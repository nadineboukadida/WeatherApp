import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  name : any ;
  private subject = new Subject <any> ()
  url = 'https://api.openweathermap.org/data/2.5/weather/';
  apiKey = 'bd659a828032f2c5c4a8c1321310e390';
  constructor(private http: HttpClient) {}

  getWeatherDatabyName(name) {
    this.name=name;
    this.subject.next(this.name);
    let params = new HttpParams()
    .set('q', name).set('units','metric').set('appid' , this.apiKey);
 
    return this.http.get(this.url ,  { params });
  }
  onChange():Observable<any> {
    return this.subject.asObservable();
  }

}
