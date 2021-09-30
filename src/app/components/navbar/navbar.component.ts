import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  token:any;
  details:any;
  gettingUsername:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
 
   this.token = jwt_decode(localStorage.getItem("Token"));
   this.gettingUsername=true;

  }

 

  logout(){
    this.token  = null;
    localStorage.removeItem('Token');
    this.router.navigateByUrl("/Login")
    // window.location.reload();
}

}
