import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoPostComponent } from './todo-post/todo-post.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoPostComponent,
    HomeComponent,
    PostsComponent,
    ErrorPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
