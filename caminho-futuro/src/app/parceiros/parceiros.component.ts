import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { reduce, tap, startWith, scan } from 'rxjs/operators';

@Component({
  selector: 'app-parceiros',
  templateUrl: 'parceiros.component.html',
  styleUrls: ['parceiros.component.scss']
})
export class ParceirosComponent {
  parceiros = [
    '../../assets/Parceiros/img-adoteumsorriso.png',
    '../../assets/Parceiros/img-arquideosenano.png',
    '../../assets/Parceiros/img-bancodobrasil.png',
    '../../assets/Parceiros/img-fundo-social.png',
    '../../assets/Parceiros/img-sabesp.png',
    '../../assets/Parceiros/img-provida.png'
  ];
}
