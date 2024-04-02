import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlidermenuComponent } from '../shared/slidermenu/slidermenu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,SlidermenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default  class  DashboardComponent {

}
