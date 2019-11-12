import { Component } from '@angular/core';

@Component({
  selector: 'app-nossa-historia',
  templateUrl: 'nossa-historia.component.html',
  styleUrls: ['nossa-historia.component.scss']
})
export class NossaHistoriaComponent {
  incluso = [
    'Registro no Conselho Municipal dos Direitos da Criança e do Adolescente (CMDCA)',
    'Inscrição no Conselho Estadual de Assistência Social (CONSEAS)',
    'Registro no Conselho Nacional de Assistência Social (CNAS)',
    'Certificado de Utilidade Pública Estadual',
    'Certificado de Inscrição no Conselho Municipal de Assistência Social (COMAS)',
    'Inscrição na Secretaria de Assistência e Desenvolvimento Social – (SEADS)',
    'Certificado de Entidade Beneficente de Assistência Social – CEBAS concedido pelo Conselho de Assistência Social (CNAS)',
    'Certificado de Entidade Social (CENTS)',
    'Certificado de regularidade Cadastral de Entidades (CRCE)'
  ];
}
