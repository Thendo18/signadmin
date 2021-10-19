import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router"; 
import { BlacklistedService } from "src/app/services/blacklisted.service";
import { UsersService } from "src/app/services/users.service";
import { MustMatch } from "src/app/_helpers/must-match.validator";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users: any =[];

  submitted = false;
  deletedInfo: any;
  selected: any = { username: "" };
  retrievedUser = {};
  registerForm: FormGroup;
  addUsersForm: FormGroup;
  isAddMode:boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    public router: Router,
    private blacklistService: BlacklistedService,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {

    // this.view();


    this.getUsers();
    this.addUsersForm = this.formBuilder.group(
      {
        username: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required],
        blacklisted:["false"],
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      }
    );

    this.registerForm = this.formBuilder.group(
      {
        username: ["", [Validators.required, Validators.email]],
      
      },
  
    );
  }
  get f() 
  {
    return this.addUsersForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addUsersForm.invalid) {
      return;
    }


    this.usersService.add_User(this.addUsersForm.value).subscribe(
      (res) => {
        window.location.reload();
        this.toastr.success("Succesfully Addeded");
        
    },
      (error) => {
        this.toastr.warning(
          'Username already exist'
        );
      }
    );
    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  getUsers(): any {
    this.usersService.get_All_Users().subscribe((arg) => {
      this.users = arg;      
    });
  }

  delete(id: any) {
    // console.log("index:"+id);
    if (confirm("Are you sure you want to delete this user")) 
    {
      this.usersService.delete_user(id).subscribe((res) => res);
    }
  }

  blacklist(userId: any): void 
  {
    this.usersService.update_user(userId, { blacklisted: true })
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

  Update(id: any) {
  
    this.retrievedUser = id;
    this.usersService
      .update_user(id, this.registerForm.value)
      .subscribe((req) => {
        window.location.reload();
     
      });
   
  }

 
  //  view()
  // {
  //   this.usersService.user().subscribe((res:any)=>{
  //      this.users = res
        
  //   })
    
  // }

 
}
