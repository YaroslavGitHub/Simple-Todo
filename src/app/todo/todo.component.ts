import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../app.component';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()

  removePost() {
    this.onRemove.emit(this.post.id)
  }


  constructor() { }

  ngOnInit() {
  }

}
