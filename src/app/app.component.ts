import { Component} from '@angular/core';
import { AuthService } from './auth.service';


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
  constructor(private auth: AuthService) {}

  now: Date = new Date()
  title= "home page"
}
