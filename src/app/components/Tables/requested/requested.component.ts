import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { RequestedService } from 'src/app/services/requested.service';
import { SignsService } from 'src/app/services/signs.service';


@Component({
  selector: 'app-requested',
  templateUrl: './requested.component.html',
  styleUrls: ['./requested.component.scss']
})
export class RequestedComponent implements OnInit {
  
  allWords:any;

  constructor(public requestedService:RequestedService, 
    public mail:HttpService,
    private signService:SignsService) {}

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

form:any;
word:any;
approved;
file:any;
  onAccepted(word:any,gif:any,approve:any)
  {
    this.form[
    this.word=word,
    this.approved=true,
    this.file=gif
    ]
    this.signService.addWord(this.form.value).subscribe((req)=>
    {
    })


}
   


}
