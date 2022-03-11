import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunitylist',
  templateUrl: './opportunitylist.component.html',
  styleUrls: ['./opportunitylist.component.css']
})
export class OpportunitylistComponent implements OnInit {

  activetab = true;
  filterscategory  = [
    {name:"All"},
    {name:"Radio"},
    {name:"TV"},
    {name:"Publications"},
    {name:"Licensing"},
    {name:"Collaboration"},
    {name:"Contest"},
    {name:"Content creation"},
  ]

  // opportunityList = [
  //   {heading:"licensing", text:"Get your songs heard across MG Motors Outlets", img:"mg.png", btn:"Closed", info:""},
  //   {heading:"COntest", text:"Win a free release & your live music video recorded", img:"gigital.png", btn:"34 days left", info:"Apply by Feb 27, 2021"},
  //   {heading:"Publications", text:"Reach global fans with a music review In XS10", img:"xs10.png", btn:"5 days left", info:"Apply by Feb 27, 2021"},
  //   {heading:"licensing", text:"Win a free online song mastering with BonaFide Studio UK", img:"artist.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
  //   {heading:"Publications", text:"Get playlisted with Breathe Indie on Spotify", img:"breathe.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
  //   {heading:"COntest", text:"Win a feature at Melody Insider", img:"melody.png", btn:"Closed", info:""},
  //   {heading:"licensing", text:"Get airplay on EGH Radio Show", img:"egh.png", btn:"Closed", info:""},
  //   {heading:"licensing", text:"Win a free online song mastering with BonaFide Studio UK", img:"artist.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
  //   {heading:"Publications", text:"Get playlisted with Breathe Indie on Spotify", img:"breathe.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
  //   {heading:"licensing", text:"Win a free online song mastering with BonaFide Studio UK", img:"artist.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
  //   {heading:"Publications", text:"Get playlisted with Breathe Indie on Spotify", img:"breathe.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
  // ]

  opportunitylist = [
    {header:"", detail:"List of Opportunity",date:"Publishing Date",status:"Status",btntext:"View",image:""},
    {header:"Get Radio Plays on Radio City", detail:"Submission Open till 20 Feb 2021",date:"12 Dec 2020",status:"Awaiting Closure",btntext:"View",image:"image-5.png",stage:"Open"},
    {header:"Get Sano in Big FM", detail:"Submission Open till 20 Feb 2021",date:"12 Dec 2020",status:"Pending",btntext:"View",image:"image-2.png",stage:"Open"},
    {header:"Create Song for Art Derc", detail:"Submission Open till 20 Feb 2021",date:"12 Dec 2020",status:"Declared",btntext:"View",image:"image-4.png",stage:"Closed"},
    {header:"LoveB Present Singer Hub", detail:"Submission Open till 20 Feb 2021",date:"12 Dec 2020",status:"Declared",btntext:"View",image:"image-6.png",stage:"Closed"}
  ]

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

  // ngAfterViewInit() {
  //   var height = this.myIdentifier.nativeElement.offsetHeight;
  // }

}
