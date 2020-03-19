import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TodoComponent} from './todo/todo.component';
import {PostsComponent} from './posts/posts.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todo/:id', component: TodoComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
