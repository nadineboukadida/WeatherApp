import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'
import { WeatherService } from 'src/app/services/weather.service';
@Component({
  selector: 'app-chart-daily',
  templateUrl: './chart-daily.component.html',
  styleUrls: ['./chart-daily.component.css']
})
export class ChartDailyComponent implements OnInit {
weather : any
  canvas: any;
  ctx: any;
  day:any;
  night:any;
  morn:any;
  eve:any;
  data:any;
  @ViewChild('mychart') mychart:any;

constructor(private weatherService : WeatherService){

}
ngOnInit(): void {
  this.getCity(this.weatherService.name);

}
  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    
   
  }

  getInfo (lat , lon ){
    this.weatherService.getMoreDatabyName(lat , lon).subscribe(e => {this.weather=e
      this.weather=this.weather.daily;
      this.weather=this.weather.slice(0,1)
      this.day = this.weather[0].temp.day;
      this.morn=this.weather[0].temp.morn
      this.eve = this.weather[0].temp.eve
      this.night= this.weather[0].temp.night
          
              this.data=[this.morn,this.eve ,this.night]
              new Chart(this.ctx, {
                type: 'line',
                data: {
                    labels: ["morning", "evening", "night"],
                    datasets: [{
                        label: "temp",
                        borderColor: "#f49080",
                        pointBorderColor: "#f49080",
                        pointBackgroundColor: "#f49080",
                       pointHoverBackgroundColor: "#f49080",
                        pointHoverBorderColor: "#f49080",
                        pointBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 3,
                        fill: false,
                        borderWidth: 4,
                        data: this.data
                    }]
                },
                options: {          
                    legend: {
                      display:false,
                        position: "bottom",
                    },
                    scales: {
                        yAxes: [{
                      offset:true ,

                            ticks: {
                              display: false,
                        
                                beginAtZero: true,
                                maxTicksLimit: 5,
                            },
                            gridLines: {
                                display: false
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                              display: true
                            },
                            ticks: {
                              display: true
                            }
                        }]
                    }
                }
            });
      
    
    } ) ; 
      }
      getCity (name) {
        this.weatherService.getWeatherDatabyName(name).subscribe(data => {
          this.weather = data;
          this.getInfo(this.weather.coord.lat ,this.weather.coord.lon)
      })}
}