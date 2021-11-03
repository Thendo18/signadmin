import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/services/http.service';
import { SignsService } from 'src/app/services/signs.service';
import { ModalContentComponent } from '../../Modals/modal-content/modal-content.component';

@Component({
  selector: 'app-requested',
  templateUrl: './requested.component.html',
  styleUrls: ['./requested.component.scss']
})
export class RequestedComponent implements OnInit {
  
  allWords:any;

  constructor( 
    public mail:HttpService,
    private signService:SignsService,
    private router:Router,
    private requestedModal:NgbModal) {}

  ngOnInit(): void {

    this.signService.getAllWords().subscribe((words)=> {

      this.allWords = words;
      console.log(this.allWords);
      
    });
  }

accept(wordId: any): void 
{
  console.log(wordId)
  this.signService.updateWord(wordId, { approved: true })
    .toPromise()
    .then(() => {
      this.router
        .navigateByUrl("login", { skipLocationChange: true })
        .then(() => {
          this.router.navigateByUrl("home");
        });
    })
    .catch((err) => {
      return err.message;
    });
}

openWordModal(pic_gif:any)
{
  localStorage.setItem("id",pic_gif);
  let ngbModalOptions : NgbModalOptions = {
    backdrop: 'static',
    keyboard:false,
    size:'md',
  };
  const modalRef= this.requestedModal.open(ModalContentComponent, ngbModalOptions)
}
}
