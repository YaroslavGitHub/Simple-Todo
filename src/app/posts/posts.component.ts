import { Component, OnInit } from '@angular/core';
import { Post } from '../app.component';

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
