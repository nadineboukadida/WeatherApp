import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
menu="waaaaaaaaaaaaa"
globe

 active1 =""
 active2 =""



  constructor() { 
    this.menu="menu"
    this.globe="globe"
  }
 click1() {
   this.active1="active"
   this.active2=""
 }
 click2() {
  this.active2="active"
  this.active1=""
}
  ngOnInit(): void {
  }

}
