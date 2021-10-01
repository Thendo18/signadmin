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

  onAccepted(word)
  {
    console.log(word);
    
    this.mail.sendEmail('http://localhost:3000/mail',     {to: "sitholeabbie@gmail.com", // list of receivers
      subject: "Word approved", // Subject line
      text: `Your ${word.word} is accepted`, // plaintext word
    }).toPromise().then(() => {
      console.log('Email sent');
      
    }).catch(err => {
      console.log(err.message);
          })


  }

  onRejected()
  {

  }

}
