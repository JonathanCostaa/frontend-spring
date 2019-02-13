
import * as core from '@angular/core';
import { ContatosService } from '../contatos.service';

@core.Component({
  selector: 'app-contatos-buscar',
  templateUrl: './contatos-buscar.component.html',
  styleUrls: ['./contatos-buscar.component.css']
})

export class ContatosBuscarComponent implements core.OnInit {

  contatos = [];

  constructor(private contatosService: ContatosService) { }
  // criando o metado consultar...
  ngOnInit() {
    this.consultar();
  }

  // consutando dados de contatos
  consultar() {
    this.contatosService.consultar()
      .subscribe(contatos => {
        this.contatos = contatos;
      });
  }

  // excluindo dados de contatos
  excluir(id: any) {
    this.contatosService.excluir(id)
      .subscribe(() => {
        alert('Contato excluido com sucesso');
        this.consultar();
      });
  }

}
