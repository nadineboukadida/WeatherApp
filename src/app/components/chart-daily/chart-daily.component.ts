import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
  selector: 'app-chart-daily',
  templateUrl: './chart-daily.component.html',
  styleUrls: ['./chart-daily.component.css']
})
export class ChartDailyComponent implements OnInit {

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;
ngOnInit(): void {
    
}
  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ["morning", "afternoon", "evening", "night"],
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
              data: [100, 120, 150, 170]
          }]
      },
      options: {          
          legend: {
            display:false,
              position: "bottom"
          },
          scales: {
              yAxes: [{
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
  }}