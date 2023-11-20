import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent { // this export allows us to 'IMPORT' this class into our app.module.ts file to use for routing
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
