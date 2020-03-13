import { Component} from '@angular/core';
export interface Post {
  title: string
  id: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
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



}
