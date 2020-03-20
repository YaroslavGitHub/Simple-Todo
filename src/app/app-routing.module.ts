import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TodoComponent} from './todo/todo.component';
import {PostsComponent} from './posts/posts.component'
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todo/:id', component: TodoComponent},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'error', component: ErrorPageComponent},
  {path:"**", redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
