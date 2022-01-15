import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prediction-element',
  templateUrl: './prediction-element.component.html',
  styleUrls: ['./prediction-element.component.css']
})
export class PredictionElementComponent implements OnInit {
@Input() item:any;
temp : any;
date : string ;
weather : any ;
min:number
max:number
code: string
img:string
  constructor() { }

  ngOnInit(): void {
    this.min = this.item.temp.min;
    this.max = this.item.temp.max;
    var date = new Date(this.item.dt* 1000);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    
    this.date = mm + '/' + dd + '/' + yyyy;

    this.code = this.item.weather[0].icon;
    if (this.code =="01n" ||this.code =="01d") {
      this.img = "sunny.svg"

    }
   else if (this.code =="02n" ||this.code =="02d"
     ||this.code =="03n" ||this.code =="03d" ||this.code =="04n" ||this.code =="04d"  ){
      this.img = "cloudy.svg"
     }
    else if (this.code =="50d" || this.code =="50n" )
    {this.img="cloudy.svg"}
  else if (this.code == "09d" || this.code == "09n" || this.code == "10d" || this.code == "10n"){
    this.img="rainy.svg"
  }
  else if (this.code == "11d" || this.code == "11n"){
    this.img="thunder.svg"
  }
  else if (this.code == "13d" || this.code == "13n"){
    this.img="snowy.svg"
  }

  }

}
