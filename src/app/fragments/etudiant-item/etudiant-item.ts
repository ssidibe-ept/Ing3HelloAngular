import {Component, Input} from '@angular/core';
import {Etudiant} from '../../models';

@Component({
  selector: 'etudiant-item',
  standalone:true,
  imports: [],
  templateUrl: './etudiant-item.html',
  styleUrl: './etudiant-item.scss',
})
export class EtudiantItem {
  @Input()
  etudiant?:Etudiant;

  @Input()
  showDetails=false;


  @Input()
  labelStyle={
    color:'#b505b5',
    fontWeight:600,
    fontSize:16,
    textDecoration:'underline'
  };

  @Input()
  valueStyle={
    color:'#787878',
    fontWeight:600,
    fontSize:16
  };


  estMineur():boolean {
    if(this.etudiant && this.etudiant.age) {
      if (this.etudiant.age >= 18) {
        return false;
      }
    }
    return true;
  }
}
