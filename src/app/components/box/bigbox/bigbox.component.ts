import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigbox',
  templateUrl: './bigbox.component.html',
  styleUrls: ['./bigbox.component.css'],
})
export class BigboxComponent implements OnInit {
  @Input() pic: string = '';
  @Input() smallIcon: string = 'cloud';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showSmallbox: boolean;
  @Input() weather: any;
  speed: number;
  status: string;
class:string
  constructor() {}

  ngOnInit(): void {
    this.speed = this.weather.wind.speed * 2.23694;
    console.log(this.speed)

    if (this.speed < 10) {
      this.status="Gentle Breeze"
      this.class="status1"
  }
  else if (this.speed <24 ) {
    this.status="Fresh Breeze"
    this.class="status2"

  }
  else if (this.speed <31 ) {
    this.status="Strong Breeze"
    this.class="status3"

  } 
  else if (this.speed <54 ) {
    this.status="Strong Gale"
    this.class="status4"

  }
  else {this.status="Storm Force"
  this.class="status5"
  }
}}
