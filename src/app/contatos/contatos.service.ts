
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContatosService  {

  constructor(private http: HttpClient) { }

  // usando http do beck-end para fazer a consulta....
  consultar(): Observable<any> {
    return this.http.get('http://localhost:8080/Contatos');
  }
  // usando http do beck-end para excluir um contato....
  excluir(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/Contatos/${id}`);
  }
  // usando http do beck-end para atualizar dados de contatos....
  adicionar(contatos: any): Observable<any> {
     return this.http.post(`http://localhost:8080/Contatos`, contatos);
  }

  // usando http do beck-end para atualizar dados de contatos....
  atualizar(contatos: any): Observable<any> {
      return this.http.put(`http://localhost:8080/Contatos/${contatos.id}`, contatos);
    }

}
