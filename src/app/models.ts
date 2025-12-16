

export interface Classe {
  id?: number;
  code: string;
  nom: string;
  description?: string;
  responsable?:Etudiant
}

export interface Etudiant{
  id?: number;
  prenom: string;
  nom:string;
  age?:number;
  poids?:number;
  adresse?:string;
  tel:string;
  inscrit?:boolean,
  classe:Classe
}
