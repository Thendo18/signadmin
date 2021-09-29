import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  submitted = false;

  userToken:any = {};
  constructor(private formBuilder: FormBuilder,private usersService:UsersService,private toastr: ToastrService) { }

  ngOnInit(): void {

    this. LoginForm = this.formBuilder.group({
     
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
      
  });
  }

  
  get f() { return this. LoginForm.controls; }

  onSubmit() {
      this.submitted = true;

    console.log(this.LoginForm.value);

    
     this.usersService.signInUser(this.LoginForm.value).subscribe((res)=>
     {
        this.userToken = res;
     

      var token = this.userToken.accessToken;

      var decoded = jwt_decode(token);

    
 localStorage.setItem("Token",token);

    

       console.log("infor received "+ decoded)
       this.toastr.success( 'Succesfully Logged IN');
     }, (error)=>{
       
       this.toastr.warning( 'Incorrect Log In Details');
     });






     

    }


}
