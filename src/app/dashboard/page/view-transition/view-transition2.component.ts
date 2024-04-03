import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  imports: [CommonModule, TitleComponent],
  standalone: true,
  template:`

    <app-title title="View Transition 2 "/>
    <section class="flex justify-end">
        <img 
          srcset="https://picsum.photos/id/237/200/300" 
          alt="picture" width="200" 
          height="300"
          style="view-transition-name: hero1">
        <div class="bg-blue-500 w-56 h-56"></div>
    </section>
  `
 
})
export default class ViewTransitionComponent {

}
