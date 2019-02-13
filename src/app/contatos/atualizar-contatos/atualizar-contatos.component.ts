
import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contatos.service';
import { Contato } from 'src/app/core/model';

@Component({
  selector: 'app-atualizar-contatos',
  templateUrl: './atualizar-contatos.component.html',
  styleUrls: ['./atualizar-contatos.component.css']
})
export class AtualizarContatosComponent implements OnInit {
  contato = new Contato();
  constructor(private contatosService: ContatosService) { }

    ngOnInit() {
      }
  }
