import {Classe, Etudiant} from './models';



export const ing3Info:Classe={id:1,code:"ING3", nom:"3eme année diplome ingenieur de conception"}

const resp:Etudiant={id:1, prenom:'Fallou', nom:'Diop', tel:'7X XXX XXX', age:12, classe:ing3Info}

ing3Info.responsable=resp;
export const ETUDIANTS:Etudiant[]=[
  resp,
  {id:2, prenom:'Amadou', nom:'Sakho', tel:'7X XXX XXX', age:22, classe:ing3Info},
  {id:3, prenom:'Aminata', nom:'Mbengue', tel:'7X XXX XXX', age:17, classe:ing3Info},
  {id:4, prenom:'Babacar', nom:'Ciss', tel:'7X XXX XXX', age:22, classe:ing3Info},
  {id:5, prenom:'Salimata', nom:'Ba', tel:'7X XXX XXX', age:18, classe:ing3Info},
  {id:6, prenom:'Mamadou', nom:'Ndiaye', tel:'7X XXX XXX', age:22, classe:ing3Info},
  {id:7, prenom:'Ousmane', nom:'Gaye', tel:'7X XXX XXX', age:18, classe:ing3Info}
]
