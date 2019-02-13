import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionario-buscar',
  templateUrl: './funcionario-buscar.component.html',
  styleUrls: ['./funcionario-buscar.component.css']
})

export class FuncionarioBuscarComponent implements OnInit {
  funcionarios = [];
  constructor(private funcionariosService: FuncionariosService) { }
  // criando o metado consultar...
  ngOnInit() {
    this.consultar();
  }

  // consutando dados de contatos
  consultar() {
    this.funcionariosService.consultar()
      .subscribe(funcionarios => {
        this.funcionarios = funcionarios;

      });
  }

    // excluindo dados de contatos
    excluir(id: any) {
      this.funcionariosService.excluir(id)
        .subscribe(() => {
            alert('Funcionario excluido com sucesso');
            this.consultar();
        });
    }

}
