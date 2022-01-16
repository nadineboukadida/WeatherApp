import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarService } from 'src/app/services/bar.service';
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
code : string ; 
img : string ; 

  constructor(private weatherService : WeatherService ,
    private route: ActivatedRoute,private barService:BarService , private router : Router) { }

  ngOnInit(): void {
this.name = this.route.snapshot.paramMap.get('name');
  this.getCity(this.name);
this.barService.chooseMenu()
  }

  getCity(city) {
    this.weatherService.getWeatherDatabyName(city).subscribe(data => {
      this.weather = data
    if(this.weather){
  this.code = this.weather.weather[0].icon;
  if (this.code =="01n" ||this.code =="01d" || this.code =="02n" ||this.code =="02d"
   ||this.code =="03n" ||this.code =="03d" ||this.code =="04n" ||this.code =="04d"  ){
    this.img = "50.gif"
   }
  else if (this.code =="50d" || this.code =="50n" )
  {this.img="50.gif"}
else if (this.code == "09d" || this.code == "09n" || this.code == "10d" || this.code == "10n"){
  this.img="10.gif"
}
else if (this.code == "11d" || this.code == "11n"){
  this.img="11.gif"
}
else if (this.code == "13d" || this.code == "13n"){
  this.img="13.gif"
}
  }}
     ,(err)=> {
 if (err.statusText == "Not Found"){
   this.router.navigate(["**"])
 }
     } )
  }
}
