import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigbox',
  templateUrl: './bigbox.component.html',
  styleUrls: ['./bigbox.component.css']
})
export class BigboxComponent implements OnInit {
@Input() pic : string ="";
@Input() smallIcon : string = "cloud";
@Input() title : string=""; 
@Input() subtitle : string = "";
@Input() showSmallbox: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
