import { Component } from '@angular/core';
import {Classe} from '../../models';
import {ing3Info} from '../../data';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Menu} from '../../fragments/menu/menu';
import {Entete} from '../../fragments/entete/entete';

@Component({
  selector: 'app-classe-details',
  standalone:true,
  imports: [
    RouterLink,
    Menu,
    Entete
  ],
  templateUrl: './classe-details.html',
  styleUrl: './classe-details.scss',
})
export class ClasseDetails {
  classe:Classe=ing3Info
}
