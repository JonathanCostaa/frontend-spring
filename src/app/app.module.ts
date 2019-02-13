import { AtualizarFuncionariosComponent } from './funcionarios/atualizar-funcionarios/atualizar-funcionarios.component';
import { FuncionariosService } from './funcionarios/funcionarios.service';
import { ContatosService } from './contatos/contatos.service';
import { CoreModule } from './core/core.module';
import { ContatosBuscarComponent } from './contatos/contatos-buscar/contatos-buscar.component';
import { FuncionarioBuscarComponent } from './funcionarios/funcionario-buscar/funcionario-buscar.component';
import { ButtonModule } from 'primeng/components/button/button';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ContatosModule } from './contatos/contatos.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { NovoFuncionarioComponent } from './funcionarios/novo-funcionario/novo-funcionario.component';
import { NovoFuncionariosContatosComponent } from './funcionarios-contatos/novo-funcionarios-contatos/novo-funcionarios-contatos.component';
import { FuncionariosContatosModule } from './funcionarios-contatos/funcionarios-contatos.module';
import { HttpClientModule } from '@angular/common/http';
// tslint:disable-next-line:max-line-length
import { FuncionariosContatosBuscarComponent } from './funcionarios-contatos/funcionarios-contatos-buscar/funcionarios-contatos-buscar.component';
import { AtualizarContatosComponent } from './contatos/atualizar-contatos/atualizar-contatos.component';
import { NovoContatosComponent } from './contatos/novo-contatos/novo-contatos.component';

// import { parseHttpResponse } from 'selenium-webdriver/http';

const routes: Routes = [

 { path: 'Funcionarios', component: FuncionarioBuscarComponent},
 { path: 'Contatos', component: ContatosBuscarComponent},
 { path: 'Funcionarios/novo', component: NovoFuncionarioComponent},
 { path: 'Contatos/atualizar', component: AtualizarContatosComponent},
 { path: 'Funcionarios/atualizar', component: AtualizarFuncionariosComponent},
 { path: 'Contatos/novo', component: NovoContatosComponent},
 { path: 'Funcionarios/Contatos', component: FuncionariosContatosBuscarComponent},
 { path: 'Funcionarios/Contatos/novo', component: NovoFuncionariosContatosComponent}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserModule,
    FormsModule,
    ContatosModule,
    RouterModule.forRoot(routes),
    FuncionariosModule,
    FuncionariosContatosModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    ContatosService,
    FuncionariosService
  ],
  bootstrap: [AppComponent]

})

export class AppModule {}
