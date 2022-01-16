import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() list :any
@Input() country :string 
@Input() active: boolean = true;
 lastvalue  
 constructor() { 

  }

  ngOnInit(): void {
  }
  inactive (){
    this.active=false;
  }
  activate(){
    this.active=true;
  }
 
}
