import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Employe} from '../models';
import {EMPLOYES} from '../data';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployesService {

  constructor(private http: HttpClient) { }

  getAllEmployes():Observable<Employe[]>{
    //return of(EMPLOYES);

    const url="http://localhost:8080/employes";
    return this.http.get<Employe[]>(url);
  }

  getEmployeById(id:number):Observable<Employe>{
    //return of(EMPLOYES);
    const url=`http://localhost:8080/employes/${id}`;
    return this.http.get<Employe>(url);
  }

  saveEmploye(e:Employe):Observable<void>{
    const url=`http://localhost:8080/employes`;
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<void>(url,e,{headers:headers})
  }

  updateEmploye(e:Employe):Observable<void>{
    const url=`http://localhost:8080/employes/${e.id}`;
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put<void>(url,e,{headers:headers})
  }
}
