import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/footer/footer.component';
import { AppComponent } from './app.component';
import { ComoAjudarComponent } from './como-ajudar/como-ajudar.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NucleosComponent } from './nucleos/nucleos.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { AppRouterModule } from './router.module';



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
