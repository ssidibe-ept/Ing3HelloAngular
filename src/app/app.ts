import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClasseList} from './pages/classe-list/classe-list';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, ClasseList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'HelloAngular';
}
