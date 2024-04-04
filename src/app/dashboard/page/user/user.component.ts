import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '../../../service/users.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,TitleComponent],
  templateUrl: './user.component.html',
})
export  default class UserComponent {

  private route = inject(ActivatedRoute);
  private userService = inject(UsersService)

  public user = toSignal (
      this.route.params.pipe(
        switchMap( ({id}) => this.userService.getUserById( id )  )
      )
  );

  constructor(){
    console.log(this.route.params);
  }

}
