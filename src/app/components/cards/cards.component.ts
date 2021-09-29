import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlacklistedService } from 'src/app/services/blacklisted.service';
import { RequestedService } from 'src/app/services/requested.service';
import { SignsService } from 'src/app/services/signs.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class cardsComponent implements OnInit {

  public sumSigns: any=[];
  public sumUsers : any=[];
  public sumRequested : any=[];
  public sumBlacklisted : any=[];


  constructor(private router:Router, 
    public signs:SignsService, 
    public usersTable:UsersService, 
    public requestedSigns:RequestedService,
    public blacklistedUsers:BlacklistedService) { }


  ngOnInit(): void {

      this.signs.getAllWord().subscribe((array)=>
      {
          this.sumSigns = array;
          console.log(this.sumSigns.length);     
      })

      this.usersTable.get_All_Users().subscribe((array)=>
      {
          this.sumUsers = array;
          console.log(this.sumUsers.length);     
      })

      this.requestedSigns.getAllWords().subscribe((array)=>
      {
          this.sumRequested = array;
          console.log(this.sumRequested.length);     
      })
  }

  logout()
  {
    this.router.navigateByUrl("login");
    console.log("pressed");
  }
}
