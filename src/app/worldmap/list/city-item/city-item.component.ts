import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
@Input() city
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  goto(value) {
    console.log("fired")
    this.router.navigate(['info', value]);
  }

}
