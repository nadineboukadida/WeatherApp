import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bar-child',
  templateUrl: './bar-child.component.html',
  styleUrls: ['./bar-child.component.css']
})
export class BarChildComponent implements OnInit {
@Input() data ="globe"
@Input() active:boolean
@Output() clicked = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
onclick(){
  this.clicked.emit(this.data)
}


}
