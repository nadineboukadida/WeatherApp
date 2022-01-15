import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssinfo',
  templateUrl: './ssinfo.component.html',
  styleUrls: ['./ssinfo.component.css']
})
export class SSinfoComponent implements OnInit {
@Input() time : any;
@Input() timezone : any;

@Input() sunrise: boolean;
  constructor() { }

  ngOnInit(): void {
    var date = new Date(this.time*1000-(this.timezone*1000));
    this.time =  date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
  }

}
