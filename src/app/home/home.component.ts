import { Component, OnInit } from '@angular/core';
import { createAction } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
