import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Classe} from '../models';
import {CLASSES_LISTE} from '../data';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {

  getAllClasses():Observable<Classe[]>{
    // requete http
    return of(CLASSES_LISTE); // simule le resultat requete http
  }

  getClasseById(id:number):Observable<Classe>{
    return of(CLASSES_LISTE[0]);
  }
}
