import { Route, RouterModule } from '@angular/router';
import { NucleosComponent } from './nucleos/nucleos.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { NossaHistoriaComponent } from './sobre-nos/nossa-historia/nossa-historia.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { ContatoComponent } from './contato/contato.component';
import { ComoAjudarComponent } from './como-ajudar/como-ajudar.component';

const appRouters: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nucleos',
    component: NucleosComponent
  },
  {
    path: 'parceiros',
    component: ParceirosComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'como-ajudar',
    component: ComoAjudarComponent
  },
  {
    path: 'sobre-nos',
    loadChildren: () =>
      import('./sobre-nos/sobre-nos.module').then(m => m.SobreNosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})
export class AppRouterModule {}
