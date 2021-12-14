import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  isShowSideNav = true;
  sideNavMedia: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.showSideNav.subscribe((state:boolean) => {
      this.isShowSideNav = state
    })
     this.sideNavMedia = window.matchMedia("(max-width: 425px)")
     this.sideNavMediaFunction(this.sideNavMedia);
  }

  sideNavMediaFunction(media:any){
     if (media.matches) {
        this.isShowSideNav = false;
      } else {
        this.isShowSideNav = true;
      }
  }

  showSideNav(){
    this.isShowSideNav = !this.isShowSideNav;
  }
}
