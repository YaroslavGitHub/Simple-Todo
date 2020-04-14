import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-drop',
  templateUrl: './todo-drop.component.html',
  styleUrls: ['./todo-drop.component.css'],
})
export class TodoDropComponent {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  next = [
    'Get to work 1',
    'Pick up groceries 2',
    'Go home 2',
    'Fall asleep 9'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
    'Cut grass'
  ];

  live = [
    'Clean flour',
    'Swim'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
