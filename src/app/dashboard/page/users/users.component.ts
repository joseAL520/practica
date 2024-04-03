import { Component, inject } from '@angular/core';
import { UsersService } from '../../../service/users.service';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    imports: [TitleComponent, CommonModule,RouterModule]
})
export  default class UsersComponent {
  //injeccion
  public userService = inject(UsersService)

  constructor(){
  
  }
}
