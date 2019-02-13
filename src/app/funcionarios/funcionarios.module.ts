
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule } from '@angular/forms';
import { NovoFuncionarioComponent } from './novo-funcionario/novo-funcionario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { FuncionarioBuscarComponent } from './funcionario-buscar/funcionario-buscar.component';
import { Router, RouterModule } from '@angular/router';
import { AtualizarFuncionariosComponent } from './atualizar-funcionarios/atualizar-funcionarios.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    FuncionarioBuscarComponent,
    NovoFuncionarioComponent,
    AtualizarFuncionariosComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    DataTableModule,
    BrowserModule,
    TooltipModule,
    RouterModule,
    TableModule,
  ],
  exports: [
    FuncionarioBuscarComponent,
    NovoFuncionarioComponent,
    AtualizarFuncionariosComponent
  ],

})
export class FuncionariosModule { }
