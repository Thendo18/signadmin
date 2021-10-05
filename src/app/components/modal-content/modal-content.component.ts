import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {  NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignsService } from 'src/app/services/signs.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})


export class ModalContentComponent implements OnInit {
  @Input() word;
  @Input() pic_gif;
  
  selected:any;
  constructor(private modalService:NgbModal,public activeModal: NgbActiveModal,public signServ:SignsService) { }

  ngOnInit(): void {
    this.signServ.getOne(localStorage.getItem("id")).subscribe((req)=>
    {
      this.selected=req
    })
    console.log(this.selected);
    
  }

  
        

  
}
    
  
   

  

