import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
@Input() width:number
@Input() item:string

  constructor() { }

  ngOnInit(): void {
  }

}
