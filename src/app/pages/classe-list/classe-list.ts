import {Component, OnInit} from '@angular/core';
import {Classe} from '../../models';
import {ClassesService} from '../../services/classes-service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'ipsl-classe-list',
  standalone:true,
  imports: [
    JsonPipe
  ],
  templateUrl: './classe-list.html',
  styleUrl: './classe-list.scss',
})
export class ClasseList implements OnInit {
  classes:Classe[] = [];

  constructor(private classesService:ClassesService) {
  }

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses():void{
    this.classesService.getAllClasses().subscribe({
      next:(results:Classe[])=>{
        this.classes = results;
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{

      }
    })
  }



}
