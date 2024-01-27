import { Component } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  constructor(private navbarServiceService:NavbarServiceService){}
  first:boolean=false;
  second:boolean=false;
  firstSecond:boolean=false
 secondFirst:boolean=false


  ngOnInit()
  {
    this.first=this.navbarServiceService.first
    this.second=this.navbarServiceService.second
    



  }
  firstDisplay()
  {
    this.navbarServiceService.first=!this.first
    this.first=!this.first
  }
  secondDisplay()
  {
    this.navbarServiceService.second=!this.second
    this.second=!this.second
  }

}
