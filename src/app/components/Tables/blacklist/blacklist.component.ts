import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BlacklistedService } from "src/app/services/blacklisted.service";
import { UsersService } from "src/app/services/users.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { data } from "jquery";
import { Users } from "src/app/Classes/users";

@Component({
  selector: "app-blacklist",
  templateUrl: "./blacklist.component.html",
  styleUrls: ["./blacklist.component.scss"],
})
export class BlacklistComponent implements OnInit {
  allUsers: any;
  form: any;
  deletedInfo: any;
  data: any;
  addSignForm: FormGroup;
  username: any;
  password: any;

  
  constructor(
    public blacklistService: BlacklistedService,
    private router: Router,
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.blacklistService.getAllUsers().subscribe((users) => {
      this.allUsers = users;
     
    });
  }

  deleteUser(id: any, name: any, email: any) {
    const dataInfo = id;
    this.blacklistService.deleteUsers(id).subscribe((result) => {
      this.router.navigateByUrl("");

      localStorage.setItem("BlacklistedData", dataInfo);
    });
  }

  

  enable(userId: any): void {    
    this.userService
      .update_user(userId, { blacklisted: false })
      .toPromise()
      .then(() => {
        this.router.navigateByUrl('login', {skipLocationChange: true}).then(() => {
          this.router.navigateByUrl('home')
        })
      }).catch(err => {
        return err.message;
      });
      // window.location.reload();
  }

  convert(): void {
    let username: string = this.allUsers.username;
    username = username.substring(0, username.lastIndexOf("@"))
    this.allUsers.username = username;
    
    
  }
}
