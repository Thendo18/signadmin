import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {  NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestedService } from 'src/app/services/requested.service';

@Component({
  selector: 'app-view-gesture',
  templateUrl: './view-gesture.component.html',
  styleUrls: ['./view-gesture.component.scss']
})
export class ViewGestureComponent implements OnInit 
{

  @Input() word:any;
  @Input() pic_gif:any;
  selected:any;
  public startedPlay:boolean = false;
  public show:boolean = false;

  constructor(private modalService:NgbModal,public activeModal: NgbActiveModal,public requestSign:RequestedService) { }

  ngOnInit(): void 
  {
    this.requestSign.getOne(localStorage.getItem("id")).subscribe((req)=>
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

