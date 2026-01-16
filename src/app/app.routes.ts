import { Routes } from '@angular/router';
import {ClasseList} from './pages/classe-list/classe-list';
import {ClasseAdd} from './pages/classe-add/classe-add';
import {Accueil} from './pages/accueil/accueil';
import {Error404} from './pages/error404/error404';
import {ClasseDetails} from './pages/classe-details/classe-details';
import {EtudiantsClasse} from './pages/etudiants-classe/etudiants-classe';
import {EtudiantAjout} from './pages/etudiant-ajout/etudiant-ajout';
import {TestRxjs} from './pages/test-rxjs/test-rxjs';
import {EmployeList} from './pages/employe-list/employe-list';

export const routes: Routes = [
  {path:'', component:EmployeList},
  {path:'classes', component:ClasseList},
  {path:'classes/:idClass/etudiants', component:EtudiantsClasse},
  {path:'classes/ajout', component:ClasseAdd},
  {path:'classes/:idClass/new-etudiant', component:ClasseAdd},
  {path:'new-etudiant', component:EtudiantAjout},
  {path:'accueil', component:Accueil},
  {path:'rx-js', component:TestRxjs},
  {path:'**', component:Error404},
];
