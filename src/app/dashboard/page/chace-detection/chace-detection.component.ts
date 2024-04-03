import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';

@Component({
    
    selector: 'app-chace-detection',
    standalone: true,
    imports: [TitleComponent,CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,


    template: `
    <app-title [title]="currrentFrameWork()"/>


    <pre>{{frameWork()   | json     }}</pre>
    <pre>{{frameWorkAsProperty | json  }}</pre>
    `
})
export default class ChaceDetectionComponent {

  public currrentFrameWork = computed(
    () => `chance detection = ${this.frameWork().name}`
  );


  public frameWork = signal({
    name: 'angular',
    aye: 2016
  })

  public frameWorkAsProperty = {
    name: 'angular',
    aye: 2016
  }


  constructor(){
    setTimeout(() =>{
      // this.frameWorkAsProperty.name = 'React';

      this.frameWork.update(value =>({
        ...value,
        name:'React'
      }))

      console.log('Hecho');
    },3000);
  }

}
