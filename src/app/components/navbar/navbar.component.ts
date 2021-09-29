import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  token:any;
  details:any;
  constructor() { }

  ngOnInit(): void {
 
   this.token = jwt_decode(localStorage.getItem("Token"));

  }

 

  logout(){
    this.token  = null;
    localStorage.removeItem('Token');
    window.location.reload();
}

}
