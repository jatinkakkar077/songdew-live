import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  innerHeight: any;
  innerWidth: any;
  isDesktopMode: any;
  isTabletMode: any;
  isMobileView: any;
  constructor() { }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight - (window.innerHeight * .3);
    this.innerWidth = window.outerWidth ;
    this.isDesktopMode = false;
    this.isTabletMode = false;
    if(this.innerWidth > 1200) {
      this.isDesktopMode = true;
    }else if(this.innerWidth >= 768) {
      this.isTabletMode = true;
    }
    this.isMobileView = window.outerWidth < 650;
  }

}
