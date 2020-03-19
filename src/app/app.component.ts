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

  now: Date = new Date()
  title= "home page"
}
