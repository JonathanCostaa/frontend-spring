import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-atualizar-funcionarios',
  templateUrl: './atualizar-funcionarios.component.html',
  styleUrls: ['./atualizar-funcionarios.component.css']
})
export class AtualizarFuncionariosComponent implements OnInit {
 funcionarios = [];
  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit() {
  }
// salvar dados nos contatos
alterar(form: FormControl) {
  this.funcionariosService.atualizar(this.funcionarios)
      .subscribe(() => {
        alert('Contato alterado com sucesso');
        form.reset();
    //  this.contatos = new Contatos();
  });
}
}
