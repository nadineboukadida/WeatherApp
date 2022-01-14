import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
search  : string =""
  constructor() { }

  ngOnInit(): void {
  }
   
  onKey(event:any) {
   this.search=event.target.value;
  }
}
