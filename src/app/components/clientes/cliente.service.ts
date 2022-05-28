import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators'
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`https://reqres.in/api/users`)

  }

    //Private Methods

    private jsonDataToClientes(jsonData: any[]): Cliente[]{
      const clientes: Cliente[] = [];
      jsonData.forEach(element =>  clientes.push(element as Cliente));
      return clientes; 
  
    }
    private jsonDataToCliente (jsonData: any): Cliente{
      return jsonData as Cliente;
    }
    private handleError(error: any):Observable<any>{
      console.log("Erro na requisição =>", error);
      return throwError(error);
    }
  
  
}
