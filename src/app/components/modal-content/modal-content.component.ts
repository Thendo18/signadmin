import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {  NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignsService } from 'src/app/services/signs.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})


export class ModalContentComponent implements OnInit {
  @Input() word:any;
  @Input() pic_gif:any;
  selected:any;
  public startedPlay:boolean = false;
public show:boolean = false;
  constructor(private modalService:NgbModal,public activeModal: NgbActiveModal,public signServ:SignsService) { }

  ngOnInit(): void {
    this.signServ.getOne(localStorage.getItem("id")).subscribe((req)=>
    {
      this.selected=req;

    })    
  }

  pauseVideo(videoplayer)
{
  videoplayer.nativeElement.play();
  // this.startedPlay = true;
  // if(this.startedPlay == true)
  // {
     setTimeout(() => 
     {
      videoplayer.nativeElement.pause();
       if(videoplayer.nativeElement.paused)
      {
        this.show = !this.show;       
      } 
     }, 5000);
  // }
}

closebutton(videoplayer){
  this.show = !this.show; 
  videoplayer.nativeElement.play();
}

        

  
}
    
  
   

  

