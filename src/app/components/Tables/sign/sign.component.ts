import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { SignsService } from 'src/app/services/signs.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  addSignForm: FormGroup;
  submitted = false;
  allsigns:any;
  

  constructor(private formBuilder: FormBuilder,private usersService:UsersService,private signService:SignsService ) { }

  ngOnInit() {
      this.addSignForm = this.formBuilder.group({
          name: ['', Validators.required],
          image: ['', Validators.required],
  })
  this.signService.getAllWord().subscribe((array)=>
  {
    this.allsigns=array;
  })


 


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
  }

  onReset() {
      this.submitted = false;
      this.addSignForm.reset();
      console.log(this.addSignForm.value);
      
  }
       

  delete(id:any) 
{ 
  // console.log("index:"+id);
   if(confirm("Are you sure you want to delete this word")) 
   { this.signService.deleteWord(id).subscribe((res)=>res)};
  this.refresh();
  
}
  //to refresh a page
refresh(): void {
  window.location.reload();
}


}
