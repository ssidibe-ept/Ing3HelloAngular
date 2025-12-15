import { Component } from '@angular/core';
import {Menu} from '../menu/menu';

@Component({
  selector: 'app-entete',
  standalone:true,
  imports: [
    Menu
  ],
  templateUrl: './entete.html',
  styleUrl: './entete.scss',
})
export class Entete {

}
