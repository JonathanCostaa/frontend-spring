import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { Router, RouterModule } from '@angular/router';
import { NovoFuncionariosContatosComponent } from './novo-funcionarios-contatos/novo-funcionarios-contatos.component';
import { FuncionariosContatosBuscarComponent } from './funcionarios-contatos-buscar/funcionarios-contatos-buscar.component';

@NgModule({
  declarations: [
    FuncionariosContatosBuscarComponent,
    NovoFuncionariosContatosComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    DataTableModule,
    BrowserModule,
    TooltipModule,
    RouterModule
  ],
  exports: [
    FuncionariosContatosBuscarComponent,
    NovoFuncionariosContatosComponent
  ]
})
export class FuncionariosContatosModule { }
