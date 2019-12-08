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
  valores = false;

  organograma() {
    this.historia = false;
    this.proj = false;
    this.org = true;
    this.valores = false;
  }

  nossaHistoria() {
    this.historia = true;
    this.proj = false;
    this.org = false;
    this.valores = false;
  }

  projetos() {
    this.historia = false;
    this.proj = true;
    this.org = false;
    this.valores = false;
  }

  nossosValores() {
    this.historia = false;
    this.proj = false;
    this.org = false;
    this.valores = true;
  }
}
