import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Post} from '../app.component'


@Component({
  selector: 'app-todo-post',
  templateUrl: './todo-post.component.html',
  styleUrls: ['./todo-post.component.css']
})
export class TodoPostComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  title = ''

  constructor() { }

  ngOnInit() {
  }
  addPost(){
    if (this.title.trim) {
      const post: Post = {
        title: this.title,
        id: new Date()

      }
      this.onAdd.emit(post)
      this.title = ''
    }
  }

}
