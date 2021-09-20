import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Users } from "src/app/Classes/users";
import { BlacklistedService } from "src/app/services/blacklisted.service";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users: any;
  addSignForm: FormGroup;
  submitted = false;
  deletedInfo: any;
  selected:any;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    public router: Router,
    private blacklistService: BlacklistedService
  ) {}

  ngOnInit(): void {
    this.getUsers();

 
  }

 
  getUsers(): any {
    this.usersService.get_All_Users().subscribe((arg) => {
      this.users = arg;
    });
  }

  delete(id: any) {
    // console.log("index:"+id);
    if (confirm("Are you sure you want to delete this user")) {
      this.usersService.delete_user(id).subscribe((res) => res);
    }
  }

  blacklist(userId: any): void {    
    this.usersService
      .update_user(userId, { blacklisted: true })
      .toPromise()
      .then(() => {
        this.router.navigateByUrl('login', {skipLocationChange: true}).then(() => {
          this.router.navigateByUrl('')
        })
      }).catch(err => {
        return err.message;
      });
  }

  Update(user,id:any)
  {
    console.log(id);
   this.usersService.get_One_User(id).subscribe((req)=>
    {
      this.selected=req;
      console.log("details"+this.selected);
    });
    // this.usersService.update_user(id,user).subscribe((req)=>
    // {

    // });
    }

    addUser(users:Users)
    {
      console.log(users+"details")
      this.usersService.add_User(users).subscribe((req)=>
      {
console.log(req);
      })
    }
 
    
}
