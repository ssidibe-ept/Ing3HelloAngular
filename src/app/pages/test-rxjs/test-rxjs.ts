import {Component, OnInit} from '@angular/core';
import {Entete} from '../../fragments/entete/entete';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import {JsonPipe} from '@angular/common';

interface Produit{
  nom: string;
  desc:string|null;
  prixU:number;
  qte:number;
}

@Component({
  selector: 'app-test-rxjs',
  standalone:true,
  imports: [
    Entete,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './test-rxjs.html',
  styleUrl: './test-rxjs.scss',
})
export class TestRxjs implements OnInit {

  produitsForm=new FormGroup({
    nom:new FormControl('', [Validators.required]),
    desc:new FormControl(''),
    prixU:new FormControl(0, [Validators.required]),
    qte:new FormControl(0, [Validators.required]),
  })

  warningStock:Produit[]=[];
  produitsMoins1000:Produit[]=[];
  produitsPlus10000:Produit[]=[];
  produitsAll:Produit[]=[];


  produitObservable = new BehaviorSubject<Produit|null>(
    null);

  ngOnInit(): void {
    this.produitObservable.subscribe({
      next: (produit) => {
        console.log('reception -1000')
        if(produit) {
          if (produit.prixU <= 1000) {
            this.produitsMoins1000.push(produit)
          }
        }
      }
    })

    this.produitObservable.subscribe({
      next: (produit) => {
        console.log('recption +10K')
        if(produit) {
          if (produit.prixU >= 10000) {
            this.produitsPlus10000.push(produit)
          }
        }
      }
    })


    this.produitObservable.subscribe({
      next: (produit) => {
        console.log('reception all')
        if(produit) {
          this.produitsAll.push(produit)
        }
      }
    })

  }





  ajoutProduit(){
    const nom=this.produitsForm.controls['nom'].value;
    const desc=this.produitsForm.controls['desc'].value;
    const prixU=this.produitsForm.controls['prixU'].value;
    const qte=this.produitsForm.controls['qte'].value;
    if(nom && prixU && prixU && qte){
      const produit:Produit={
        nom:nom,
        desc:desc,
        prixU:prixU,
        qte:qte,
      }
      this.produitObservable.next(produit);
      console.log('produit ajouter ', produit)
      this.produitsForm.reset();
    }

  }




}
