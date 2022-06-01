import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators'
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private api: string = 'https://reqres.in/api/users'; 
  
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(this.api)

  }

  getById(CODIGO: number): Observable<Cliente>{
    const url = `${this.api}/${CODIGO}`;
    return this.http.get(url)
    

  }

  create(cliente: any){
    return this.http.post(this.api, cliente)
  }


  
  
}
