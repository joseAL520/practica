import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-slidermenu',
  standalone: true,
  imports: [],
  templateUrl: './slidermenu.component.html',
  styleUrl: './slidermenu.component.css'
})
export class SlidermenuComponent {


    public menuItem = routes
    .map(route => route.children ?? [] )
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(':'))


    constructor(){
      
    }

}
