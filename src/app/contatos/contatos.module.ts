import {TableModule} from 'primeng/table';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoContatosComponent } from './novo-contatos/novo-contatos.component';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { ButtonModule } from 'primeng/components/button/button';
import { AtualizarContatosComponent } from './atualizar-contatos/atualizar-contatos.component';
import { ContatosBuscarComponent } from './contatos-buscar/contatos-buscar.component';

@NgModule({
  declarations: [
    ContatosBuscarComponent,
    NovoContatosComponent,
    AtualizarContatosComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    DataTableModule,
    BrowserModule,
    TooltipModule,
    RouterModule,
    TableModule
  ],
  exports: [
    ContatosBuscarComponent,
    NovoContatosComponent,
    AtualizarContatosComponent
  ],
})
export class ContatosModule { }
