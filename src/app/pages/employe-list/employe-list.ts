import {Component, OnInit} from '@angular/core';
import {EmployesService} from '../../services/employes-service';
import {Employe} from '../../models';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-employe-list',
  imports: [
    JsonPipe
  ],
  templateUrl: './employe-list.html',
  styleUrl: './employe-list.scss',
})
export class EmployeList implements OnInit {
  employes: Employe[] = [];
  errorMsg="";
  loading=false;

  constructor(private employesService:EmployesService) { }

  ngOnInit() {
    this.loadEmployes();
  }

  loadEmployes(){
    this.loading=true;
    this.employesService.getAllEmployes().subscribe({
      next: (data)=> {
        this.employes = data;
      },
      error: (error)=> {
        this.errorMsg=`Erreur : ${error}`;
        this.loading=false
      },
      complete: ()=> {
        console.log('chargement ok des employees');
        this.loading=false
      }
    })
  }


}
