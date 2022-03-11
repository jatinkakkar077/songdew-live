import { Component, OnInit } from '@angular/core';
import { MymodalComponent } from '../mymodalcomponent/mymodalcomponent.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export interface PeriodicElement {
  Submission: string;
  SrNo: number;
}



// const ELEMENT_DATA: PeriodicElement[] = [
//   {SrNo: 1, Submission: 'Hydrogen'},
//   {SrNo: 2, Submission: 'Helium'},
//   {SrNo: 3, Submission: 'Lithium'},
//   {SrNo: 4, Submission: 'Beryllium'},
//   // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-opportunity-detail',
  templateUrl: './opportunity-detail.component.html',
  styleUrls: ['./opportunity-detail.component.css']
})
export class OpportunityDetailComponent implements OnInit {

  innerHeight: any;
  innerWidth: any;
  isDesktopMode: any;
  isTabletMode: any;
  isMobileView: any;
  customclass:any;

  opportunitydetaillist = [
      {submissionImage:"bg.png", submissionName:"Dhuriti",submissiondesc:"Brito",submissioncontact:"Contact",date:"12 Dec 2020",time:"1:31pm",status:"Award Offered",thumb1:"1",thumb2:"0"},
      {submissionImage:"si2.png", submissionName:"Shina Ta Re",submissiondesc:"Sona",submissioncontact:"Contact",date:"12 Dec 2020",time:"1:31pm",status:"Extend Award",thumb1:"2",thumb2:"3"},
      {submissionImage:"si3.png", submissionName:"Something",submissiondesc:"Tai",submissioncontact:"Contact",date:"12 Dec 2020",time:"1:31pm",status:"Extend Award",thumb1:"5",thumb2:"3"},
      {submissionImage:"si4.png", submissionName:"Bla Bla So",submissiondesc:"yyi",submissioncontact:"Contact",date:"12 Dec 2020",time:"1:31pm",status:"Extend Award",thumb1:"5",thumb2:"4"},
      {submissionImage:"si5.png", submissionName:"Blao Si",submissiondesc:"Backs",submissioncontact:"Contact",date:"12 Dec 2020",time:"1:31pm",status:"Extend Award",thumb1:"5",thumb2:"4"},
    // {submissionImage:"bg1.png", submissionName:"Dhuriti",submissiondesc:"Brito",submissioncontact:"Contact",date:"12 Dec 2020 1:31pm",status:"Award Offered"},
  ]


  displayedColumns: string[] = ['SrNo', 'Submission'];
  // modalService: any;
  // dataSource = ELEMENT_DATA;
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.customclass = this.isMobileView ? 'custom-class' : 'custom-classd';
    const modalRef = this.modalService.open(MymodalComponent,{
      ariaLabelledBy: 'modal-basic-title', 
      size: 'lg', 
      windowClass: this.customclass
    });
    modalRef.componentInstance.my_modal_title = 'Dhuriti';
    modalRef.componentInstance.my_modal_content = 'Shiksha,  Congrats for Winning!!!.';
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {

    this.innerHeight = window.innerHeight - (window.innerHeight * .3);
    this.innerWidth = window.outerWidth ;
    this.isDesktopMode = false;
    this.isTabletMode = false;
    if(this.innerWidth >= 1200) {
      this.isDesktopMode = true;
    }else if(this.innerWidth >= 768) {
      this.isTabletMode = true;
    }
    this.isMobileView = window.outerWidth <= 650;

    
  }

}
