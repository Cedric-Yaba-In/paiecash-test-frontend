import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-account-list',
  templateUrl: './user-account-list.component.html',
  styleUrls: ['./user-account-list.component.css']
})
export class UserAccountListComponent implements OnInit {
  dataSource:User[]=[]
  displayedColumns:string[]=["name","email"]
  constructor(private userService:UsersService){}
  
  ngOnInit()
  {
    this.userService.userData$.subscribe((data)=>{
      this.dataSource=[...data]
    })
  }

}
