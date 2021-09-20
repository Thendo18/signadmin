import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-table-page',
  templateUrl: './user-table-page.component.html',
  styleUrls: ['./user-table-page.component.scss']
})
export class UserTablePageComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }

}
