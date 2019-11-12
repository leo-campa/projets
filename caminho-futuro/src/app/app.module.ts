import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from 'src/footer/footer.component';
import { NucleosComponent } from './nucleos/nucleos.component';

import { AppRouterModule } from './router.module';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ProjetosComponent } from './sobre-nos/projetos/projetos.component';
import { OrganogramaComponent } from './sobre-nos/organograma/organograma.component';
import { NossaHistoriaComponent } from './sobre-nos/nossa-historia/nossa-historia.component';
import { SobreNosModule } from './sobre-nos/sobre-nos.module';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { ContatoComponent } from './contato/contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SobreNosRouterModule } from './sobre-nos/sobre-nos.routing.module';
import { ComoAjudarComponent } from './como-ajudar/como-ajudar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    FooterComponent,
    NucleosComponent,
    ParceirosComponent,
    ContatoComponent,
    ComoAjudarComponent
  ],
  imports: [BrowserModule, AppRouterModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
