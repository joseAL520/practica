import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  template:`
    <h1> hola mundo</h1>
  `
})
export class HeavyLoadersSlowComponent {



    constructor(){

      const start = Date.now();
      while(Date.now() - start < 3000){
      }

      console.log('Heavy loaders components')
    }
}
