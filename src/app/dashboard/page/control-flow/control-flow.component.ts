import { Component, signal } from '@angular/core';


type Grade = 'A' |'B' |'F'
 
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export  default class ControlFlowComponent {

  public  showContent = signal(false)
  public  grade = signal<Grade>('B');


  public toggleContent(){
    this.showContent.update(value => !value);
  }

}
