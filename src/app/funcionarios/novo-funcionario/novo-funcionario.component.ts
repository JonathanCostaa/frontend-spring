import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuncionariosService } from '../funcionarios.service';
import { Funcionario } from 'src/app/core/model';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css']
})
export class NovoFuncionarioComponent implements OnInit {
  funcionarios = [];
  funcionario = new Funcionario();
  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit() {
  }
    // salvar dados nos contatos
    salvar(form: FormControl) {
      this.funcionariosService.adicionar(this.funcionario)
          .subscribe(() => {
            alert('Funcionario salvo com sucesso');
            form.reset();
      });
    }

}
