import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SobreNosRouterModule } from './sobre-nos.routing.module';
import { SobreNosComponent } from './sobre-nos.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { OrganogramaComponent } from './organograma/organograma.component';
import { NossaHistoriaComponent } from './nossa-historia/nossa-historia.component';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SobreNosComponent,
    ProjetosComponent,
    OrganogramaComponent,
    NossaHistoriaComponent
  ],
  imports: [SobreNosRouterModule, CommonModule],
  providers: []
})
export class SobreNosModule {}