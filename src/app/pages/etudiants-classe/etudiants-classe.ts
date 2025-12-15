import {Component, OnInit} from '@angular/core';
import {Entete} from '../../fragments/entete/entete';
import {ActivatedRoute, Router} from '@angular/router';
import {Classe, Etudiant} from '../../models';
import {ETUDIANTS, ing3Info} from '../../data';
import {JsonPipe} from '@angular/common';
import {EtudiantItem} from '../../fragments/etudiant-item/etudiant-item';

@Component({
  selector: 'app-etudiants-classe',
  standalone:true,
  imports: [
    Entete,
    JsonPipe,
    EtudiantItem
  ],
  templateUrl: './etudiants-classe.html',
  styleUrl: './etudiants-classe.scss',
})
export class EtudiantsClasse implements OnInit{
  classe?:Classe;
  etudiants:Etudiant[]=[]

  constructor(private router:Router, private activated:ActivatedRoute) {
  }

  ngOnInit(): void {
    const idClass=this.activated.snapshot.params['idClass'];

    //recup info classe from API
    this.classe=ing3Info;

    //recup liste des etudiants from API
    this.etudiants=ETUDIANTS;
  }

}
