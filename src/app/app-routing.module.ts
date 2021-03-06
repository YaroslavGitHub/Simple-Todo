import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TodoComponent} from './todo/todo.component';
import {PostsComponent} from './posts/posts.component'
import { ErrorPageComponent } from './error-page/error-page.component';
/*import { AuthGuard } from './auth.guard';*/
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthService } from './shared/auth.service';
import { TodoAddressComponent } from './todo-address/todo-address.component';
import { TodoDashComponent } from './todo-dash/todo-dash.component';
import { TodoDragComponent } from './todo-drag/todo-drag.component';
import { TodoDropComponent } from './todo-drop/todo-drop.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todo/:id', component: TodoComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'admin', component: LoginPageComponent},
  {path: 'address', component: TodoAddressComponent},
  {path: 'dash', component: TodoDashComponent},
  {path: 'tree', component: TodoDragComponent},
  {path: 'drag', component: TodoDropComponent},
  {path:"**", redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
