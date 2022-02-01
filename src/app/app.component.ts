import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week 2 Labsheet';
  thingsToDo = [
    'Thing 1',
    'Thing 2',
    'Thing 3'
  ];

  thingsCompleted=[];

  summary():string{
    return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  };

  constructor(){
    setInterval(() => {
      this.thingsToDo.push('make coffee')
    }, 10000)
  }
}
