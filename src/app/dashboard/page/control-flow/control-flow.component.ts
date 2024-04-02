import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";


type Grade = 'A' |'B' |'F'
 
@Component({
    selector: 'app-control-flow',
    standalone: true,
    templateUrl: './control-flow.component.html',
    styleUrl: './control-flow.component.css',
    imports: [TitleComponent]
})
export  default class ControlFlowComponent {

  public  showContent = signal(false)
  public  grade = signal<Grade>('B');
  public  framwork = signal(['Angular','React','Veu'])


  public toggleContent(){
    this.showContent.update(value => !value);
  }

}
