import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class cardsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.router.navigateByUrl("login");
    console.log("pressed");
  }
}
