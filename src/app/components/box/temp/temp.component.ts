import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
@Input() number: string;
@Input() descrip: string;
@Input() showDescrip: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
