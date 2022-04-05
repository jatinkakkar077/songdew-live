import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  menu = [
    {name:"Dashboard", icon:"Vector.svg", active:false, subMenu: false},
    {name:"Upload", icon:"fi_upload-cloud.svg", active:false, subMenu: false},
    {name:"Opportunity", icon:"opportunity.svg", active:true, subMenu: false},
    {name:"Promote", icon:"promote.svg", active:false, subMenu: false},
    {name:"Broardcast video", icon:"fi_film.svg", active:false, subMenu: true},
    {name:"My Songdew", icon:"S.svg", active:false, subMenu: true},
    {name:"My Music", icon:"fi_headphones.svg", active:false, subMenu: true},
    {name:"Profile", icon:"profile.svg", active:false, subMenu: true},
    {name:"Songdew TV", icon:"fi_tv.svg", active:false, subMenu: false},
    {name:"Blog", icon:"blog.svg", active:false, subMenu: false},
    {name:"Discover", icon:"discover.svg", active:false, subMenu: true},
  ];
  isMobileView =  false;
  menuShow = false;
  isDesktopMode: any;
  isTabletMode: any;
  innerHeight: any;
  innerWidth: any;
  constructor() { }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight - (window.innerHeight * .3);
    this.innerWidth = window.outerWidth ;
    this.isDesktopMode = false;
    this.isTabletMode = false;
    if(this.innerWidth > 1200) {
      this.isDesktopMode = true;
    }else if(this.innerWidth > 768) {
      this.isTabletMode = true;
    }
    this.isMobileView = window.outerWidth < 650;
  }

}
