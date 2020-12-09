import { Component, OnInit } from '@angular/core';
import { Post } from '../app.component';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts: Post[] = [
    {title: 'Lorem 1', id: 1},
    {title: 'Lorem new', id: 2},
    {title: 'todo next', id: 3}
  ]
  postsX = from(
    [
      {title: 'Lorem 1', id: 1},
      {title: 'Lorem new', id: 2},
      {title: 'todo next', id: 3}
    ]
  )
  example = this.postsX.pipe(pluck('title'));
  subscribe = this.example.subscribe(val => console.log(val));

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }
  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)

  }
  title = 'Simple ToDo List'

  inputValue = ""
  now: Date = new Date()

  constructor() { }

  ngOnInit() {
  }

}
