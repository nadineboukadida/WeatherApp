import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prediction-bar',
  templateUrl: './prediction-bar.component.html',
  styleUrls: ['./prediction-bar.component.css']
})
export class PredictionBarComponent implements OnInit {
predictions = [{date:"16 January 2022" , number : 22 , weather :"sunny"},{date:"1 January 2022" , number : 2 , weather :"rainy"},
{date:"1 January 2022" , number : 2 , weather :"cloudy"}]
  constructor() { }

  ngOnInit(): void {
  }

}
