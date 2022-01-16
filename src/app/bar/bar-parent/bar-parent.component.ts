import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarService } from 'src/app/services/bar.service';

@Component({
  selector: 'app-bar-parent',
  templateUrl: './bar-parent.component.html',
  styleUrls: ['./bar-parent.component.css'],
})
export class BarParentComponent implements OnInit {
  data: string = 'globe';
  data1: string = 'menuactive';
  active1: boolean = false;
  active2: boolean =true;
  pos;

  constructor(private router: Router, private barService: BarService) {

  }

  ngOnInit(): void {
  }

  click1() {
    this.router.navigate(['chart']);
setTimeout(()=> {
   if (this.barService.pos == 2){
      this.active1=false;
      this.active2=true;
      this.data="globe"
    this.data1="menuactive"
    }
    if (this.barService.pos == 1){
      this.active1=true;
      this.active2=false;
      this.data="globeactive"
    this.data1="menu"


    }
},500)
 
  
  }
  click2() {
    this.router.navigate(['info', 'amsterdam']);
setTimeout(()=> {
    if (this.barService.getPos() == 2){
      this.active1=false;
      this.active2=true;
      this.data="globe"
      this.data1="menuactive"


    }
    if (this.barService.getPos()== 1){
      this.active1=true;
      this.active2=false;
      this.data="globeactive"
    this.data1="menu"


    }
  
},500)

  }
}
