import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosContatosService {

  constructor(private http: HttpClient) { }

  // usando http do beck-end para fazer a consulta....
  consultar(): Observable<any> {
    return this.http.get('http://localhost:8080/Funcionarios/Contatos');
  }
}
