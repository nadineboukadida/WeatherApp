import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smallbox',
  templateUrl: './smallbox.component.html',
  styleUrls: ['./smallbox.component.css']
})
export class SmallboxComponent implements OnInit {
  @Input() color:string="" ; 
  @Input() title:string="" ; 
  @Input() value:string="" ; 

  constructor() { }

  ngOnInit(): void {
  }

}
