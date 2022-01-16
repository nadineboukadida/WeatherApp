import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
search  : string =""
name=""
  constructor(private weatherService : WeatherService,private router : Router) { }

  ngOnInit(): void {
    if(this.weatherService.weather)
      alert(this.weatherService.weather)
  }
   
  onKey(event:any) {
   this.search=event.target.value;
  }
  submit (value){
    this.router.navigate(['info', value]).then(() => {
      window.location.reload();
    });;
  }
}
