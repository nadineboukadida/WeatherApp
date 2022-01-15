import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prediction-element',
  templateUrl: './prediction-element.component.html',
  styleUrls: ['./prediction-element.component.css']
})
export class PredictionElementComponent implements OnInit {
@Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
