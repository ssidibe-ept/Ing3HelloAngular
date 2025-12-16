import { Component } from '@angular/core';
import {Entete} from "../../fragments/entete/entete";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Classe, Etudiant} from '../../models';
import {CLASSES_LISTE, ETUDIANTS, ing1Info, ing2Info, ing3Info} from '../../data';
import {JsonPipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-etudiant-ajout',
  standalone:true,
  imports: [
    Entete,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './etudiant-ajout.html',
  styleUrl: './etudiant-ajout.scss',
})
export class EtudiantAjout {

  etudiantForm=new FormGroup({
    prenom: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)]),

    nom: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    inscrit: new FormControl(false, [Validators.required]),
    classId: new FormControl(0, [Validators.required]),
  });

  classes:Classe[]=CLASSES_LISTE;

  constructor(private router:Router) {
  }


  saveEtudiant(){
    console.log('saving etudiant');
    const prenom=this.etudiantForm.controls['prenom'].value;
    const nom=this.etudiantForm.get('nom')?.value;
    const tel=this.etudiantForm.controls['tel'].value;
    const inscrit=this.etudiantForm.controls['inscrit'].value;
    const classId=this.etudiantForm.controls['classId'].value;

    //let classe:Classe=ing1Info.id==classId?ing1Info:(ing2Info.id==classId?ing2Info:ing3Info);
    let classe:Classe|undefined;
    if(classId==ing1Info.id){
      classe=ing1Info;
    }else if(classId==ing2Info.id){
      classe=ing2Info;
    }else {
      classe=ing3Info;
    }
    /*console.log('prenom',prenom);
    console.log('nom',nom);
    console.log('tel',tel);
    console.log('inscrit',inscrit);
    console.log('classId',classId);*/

    if(prenom && nom && tel && inscrit){
      const etudiant:Etudiant={
        prenom:prenom,
        nom:nom,
        tel:tel,
        inscrit:inscrit,
        classe:classe
      }
      ETUDIANTS.push(etudiant);
      console.log('navigation')
      this.router.navigate(['classes',classe.id,'etudiants']);
    }
  }


}


//Formcontrol ==> champ
//FormGroup  ===> { pre:string, value: FormControl|FormGroup
//FormArray  ===> tableau de champ, formgroup ou formarray
//template form documenter
//reactive form
