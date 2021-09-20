import { Component, OnInit } from '@angular/core';
import { RequestedService } from 'src/app/services/requested.service';

@Component({
  selector: 'app-requested',
  templateUrl: './requested.component.html',
  styleUrls: ['./requested.component.scss']
})
export class RequestedComponent implements OnInit {
  
  allWords:any;

  constructor(public requestedService:RequestedService) {}

  ngOnInit(): void {

    this.requestedService.getAllWords().subscribe((words)=> {

      this.allWords = words;
    });
  }

}
