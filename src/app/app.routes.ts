import { Routes } from '@angular/router';
import {ClasseList} from './pages/classe-list/classe-list';
import {ClasseAdd} from './pages/classe-add/classe-add';
import {Accueil} from './pages/accueil/accueil';
import {Error404} from './pages/error404/error404';
import {ClasseDetails} from './pages/classe-details/classe-details';
import {EtudiantsClasse} from './pages/etudiants-classe/etudiants-classe';

export const routes: Routes = [
  {path:'', component:ClasseDetails},
  {path:'classes', component:ClasseList},
  {path:'classes/:idClass/etudiants', component:EtudiantsClasse},
  {path:'classes/ajout', component:ClasseAdd},
  {path:'accueil', component:Accueil},
  {path:'**', component:Error404},
];
