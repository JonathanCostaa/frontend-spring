import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contatos.service';
import { FormControl } from '@angular/forms';
import { Contato } from 'src/app/core/model';

@Component({
  selector: 'app-novo-contatos',
  templateUrl: './novo-contatos.component.html',
  styleUrls: ['./novo-contatos.component.css']
})
export class NovoContatosComponent implements OnInit {
  contatos = [];
  contato = new Contato();
  constructor(private contatosService: ContatosService) { }

  ngOnInit() {
  }
    // salvar dados nos contatos
     salvar(form: FormControl) {
      this.contatosService.adicionar(this.contato)
          .subscribe(() => {
            alert('Contato salvo com sucesso');
            form.reset();
      });
    }
}
