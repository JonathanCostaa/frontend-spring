import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { }

  // usando http do beck-end para fazer a consulta....
  consultar(): Observable<any> {
    return this.http.get('http://localhost:8080/Funcionarios');
  }

  // usando http do beck-end para excluir um contato....
  excluir(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/Funcionarios/${id}`);
  }
   // usando http do beck-end para criar dados de contatos....
   adicionar(funcionarios: any): Observable<any> {
    return this.http.post(`http://localhost:8080/Funcionarios`, funcionarios);
 }

  // usando http do beck-end para atualizar dados de contatos....
  atualizar(funcionarios: any): Observable<any> {
      return this.http.put(`http://localhost:8080/Funcionarios/${funcionarios.id}`
      , funcionarios);
    }
}
