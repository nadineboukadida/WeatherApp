import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarService {
  pos
  constructor() { }

  chooseGlobe(){
   this.pos=1
  }
  chooseMenu(){
    this.pos=2
  }
  getPos(){
    return this.pos
  }
}
