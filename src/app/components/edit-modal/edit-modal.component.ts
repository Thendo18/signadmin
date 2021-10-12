import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { SignComponent } from '../Tables/sign/sign.component';
import { SignsService } from 'src/app/services/signs.service';
import {  NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, SelectMultipleControlValueAccessor, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  selected: any;
  @Input() word:any;
  @Input() pic_gif:any;
  @Output() focusOut: EventEmitter<number> = new EventEmitter<number>();
  isUpdated: boolean;
  editForm:FormGroup;
  retrievedWord:any;
  editMode = false;
  submitted = false;
  fileName = '';
  uploadProgress:number;
  uploadSub: Subscription;
  updateStats: any;
  
  constructor(private modalService:NgbModal,
    public activeModal: NgbActiveModal,
    public signServ:SignsService,
    private formBuilder: FormBuilder,
    public router: Router,private http: HttpClient,
    public toast:ToastrService,
    ) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      word: ["", Validators.required],
      pic_gif:["",Validators.required]
    });
    this.signServ.getOne(localStorage.getItem("id")).subscribe((req)=>
    {
      this.selected=req;
      
    }
    
);
    
    
    
  }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    
    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.editForm.value, null, 4)
    );
    
  }
  update(id: any) {
    console.log("Id received" + id);
    this.retrievedWord = id;
    this.signServ.updateWord(id,this.editForm.value)
      
      .subscribe((req) => {
        console.log(req);
        
      });
      
      
    this.toast.success('successfully updated', 'word update',
    {timeOut: 5000},);;
    window.location.reload(); 
    this.signServ.isUpdated.next(true);
  }
  

  get f() 
  {
    return this.editForm.controls;
   }

 

}
