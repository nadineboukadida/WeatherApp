import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
@Input()pic:string
@Input() active:string =""
url :string
  constructor() { }

  ngOnInit(): void {

  }

}
