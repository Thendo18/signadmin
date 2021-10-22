import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

import { SignsService } from 'src/app/services/signs.service';


@Component({
  selector: 'app-requested',
  templateUrl: './requested.component.html',
  styleUrls: ['./requested.component.scss']
})
export class RequestedComponent implements OnInit {
  
  allWords:any;

  constructor( 
    public mail:HttpService,
    private signService:SignsService,
    private router:Router) {}

  ngOnInit(): void {

    this.signService.getAllWords().subscribe((words)=> {

      this.allWords = words;
      console.log(this.allWords);
      
    });
  }


  // delete(id:any)
  // {
  //  this.requestedService.deleteUsers(id).subscribe((req)=>
  //  {
     
  //  });
    
  // }






accept(wordId: any): void 
{
  console.log(wordId)
  this.signService.updateWord(wordId, { approved: true })
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


}
