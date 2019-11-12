import { Route, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { NossaHistoriaComponent } from './nossa-historia/nossa-historia.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { OrganogramaComponent } from './organograma/organograma.component';
import { SobreNosComponent } from './sobre-nos.component';

const appRouters: Route[] = [
  {
    path: '',
    component: SobreNosComponent
  },

  {
    path: 'organograma',
    component: OrganogramaComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  },
  {
    path: 'nossa-historia',
    component: NossaHistoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRouters)],
  exports: [RouterModule]
})
export class SobreNosRouterModule {}
