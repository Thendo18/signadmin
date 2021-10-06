import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { RequestedService } from 'src/app/services/requested.service';

@Component({
  selector: 'app-requested',
  templateUrl: './requested.component.html',
  styleUrls: ['./requested.component.scss']
})
export class RequestedComponent implements OnInit {
  
  allWords:any;

  constructor(public requestedService:RequestedService, public mail:HttpService) {}

  ngOnInit(): void {

    this.requestedService.getAllWords().subscribe((words)=> {

      this.allWords = words;
    });
  }


  // delete(id:any)
  // {
  //  this.requestedService.deleteUsers(id).subscribe((req)=>
  //  {
     
  //  });
    
  // }


}
