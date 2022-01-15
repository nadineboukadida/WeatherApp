import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tall-box',
  templateUrl: './tall-box.component.html',
  styleUrls: ['./tall-box.component.css']
})
export class TallBoxComponent implements OnInit {
  @Input() pic : string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
