import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigbox',
  templateUrl: './bigbox.component.html',
  styleUrls: ['./bigbox.component.css']
})
export class BigboxComponent implements OnInit {
@Input() pic : string ="";
@Input() smallIcon : string = "cloud";
  constructor() { }

  ngOnInit(): void {
  }

}
