import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-icons',
  templateUrl: './small-icons.component.html',
  styleUrls: ['./small-icons.component.css']
})
export class SmallIconsComponent implements OnInit {
  @Input() pic:string = "cloud"

  constructor() { }

  ngOnInit(): void {
  }

}
