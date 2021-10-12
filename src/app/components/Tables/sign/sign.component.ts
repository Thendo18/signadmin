import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { SignsService } from 'src/app/services/signs.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../../modal-content/modal-content.component';
import { Router } from '@angular/router';
import { EditModalComponent } from '../../edit-modal/edit-modal.component';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
 

   private modalRef;
  addSignForm: FormGroup;
  submitted = false;
  allsigns:any;
  isUpdated: boolean;
  file: File = null
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private usersService:UsersService,private signService:SignsService ,private signModal:NgbModal, private router: Router) {}
    
   

  ngOnInit() {
    this.form = new FormGroup({
      word: new FormControl('', [Validators.required]),
      approved: new FormControl(false, [Validators.required]),
      file: new FormControl('', [Validators.required])
    })
      this.addSignForm = this.formBuilder.group({
          name: ['', Validators.required],
          image: ['', Validators.required],
          
  })
  this.signService.getAllWord().subscribe((array)=>
  {
    this.allsigns=array;
  })
  
}
onChange(event) {
  this.file = event.target.files[0];  
}
  // convenience getter for easy access to form fields
  get f() { return this.addSignForm.controls; }

  async onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.addSignForm.invalid) {
          return;
      }
      console.log(this.addSignForm.value);
     this.usersService.add_User(this.addSignForm.value).subscribe((res)=>console.log(res))
      
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addSignForm.value, null, 4));
      localStorage.setItem("form",this.addSignForm.value);
  }

  onReset() {
      this.submitted = false;
      this.addSignForm.reset();
 
      
  }
       

  delete(id:any) 
{ 

   if(confirm("Are you sure you want to delete this word")) 
   { this.signService.deleteWord(id).subscribe((res)=>res)};
   this.refresh();
  
}

refresh(): void {
  window.location.reload();
}

openWordModal(id:any){

  localStorage.setItem("id",id );
  let ngbModalOptions : NgbModalOptions = {
    backdrop: 'static',
    keyboard:false,
    size:'md',
  };
  const modalRef= this.signModal.open(ModalContentComponent, ngbModalOptions)

}
openWordModalD(id:any){

  localStorage.setItem("id",id );
  let ngbModalOptions : NgbModalOptions = {
    backdrop: 'static',
    keyboard:false,
    size:'md',
  };
  const modalRef= this.signModal.open(EditModalComponent, ngbModalOptions)
 
}
addWord(word){
  // send to a service http post word

  const formData = new FormData(); 
        
  // Store form name as "file" with file data
  formData.append("file", this.file, this.file.name);
  formData.append("word", word.word);
  formData.append("approved", word.approved);

  this.signService.addWord(formData).toPromise().then(()=> {
    this.router.navigateByUrl('login', {skipLocationChange: true}).then(()=> {
      this.router.navigateByUrl('home')
    })
    return 'created'
  }).catch((err) => {
    return err.message;
  })
}
}




