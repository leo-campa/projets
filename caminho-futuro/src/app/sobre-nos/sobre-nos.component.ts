import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: 'sobre-nos.component.html',
  styleUrls: ['sobre-nos.component.scss']
})
export class SobreNosComponent {
  historia = true;
  proj = false;
  org = false;

  organograma() {
    this.historia = false;
    this.proj = false;
    this.org = true;
  }

  nossaHistoria() {
    this.historia = true;
    this.proj = false;
    this.org = false;
  }

  projetos() {
    this.historia = false;
    this.proj = true;
    this.org = false;
  }
}
