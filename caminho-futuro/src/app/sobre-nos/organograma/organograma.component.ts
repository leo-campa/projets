import { Component } from '@angular/core';

@Component({
  selector: 'app-organograma',
  templateUrl: 'organograma.component.html',
  styleUrls: ['organograma.component.scss']
})
export class OrganogramaComponent {
  diretoria = [
    {
      type: 'Presidente',
      content: 'José do Carmo Araújo Neto'
    },
    {
      type: 'Vice-Presidente',
      content: 'Valmir dos Santos Seles'
    },
    { type: '1 tesoureira', content: ' Generoza Maria dos Santos' },
    { type: '2 tesoureira', content: 'Maria dos Santos Almeida' },
    {
      type: '1 Secretário',
      content: 'Alzira Teodoro do Nascimento'
    },
    {
      type: '2 Secretário',
      content: 'Bernadino Teófilo Rodrigues'
    },
    {
      type: 'Diretora Social',
      content: ' Neide Merigui Costa'
    }
  ];

  conselho = [
    'Francisco das Chagas Sabino Barbosa',
    'Maria Adeilma Rodrigues Barros',
    'Maria do Rosáio Mendes de Araújo'
  ];

  gestoras = ['Claudionice Teodoro Vieira', 'Maria Alice Costa de Melo'];

  direcao = [
    {
      type: 'CEI Brincando Também se Aprende',
      content: 'Macilene Almeida Leite'
    },
    {
      type: 'CEI Girassol',
      content: 'Maria da Conceição Farias'
    },
    {
      type: 'CEI Pingo de Gente',
      content: 'Fernanda Aparecida Figueiredo Gomes'
    },
    {
      type: 'CEI Tequinho do Céu',
      content: 'Cecília Aparecida R. Oliveira '
    },
    {
      type: 'CEI Pingo de Gente ',
      content: 'Fernanda Aparecida Figueiredo Gomes'
    },
    {
      type: 'CEI Primeiros Passos',
      content: ' Cibelle Barroso Ribeiro'
    },
    {
      type: 'CCA  Arte na Rua ',
      content: ' Gisele  de Oliveira Mendonça'
    },
    {
      type: 'CCA Caminhando para o Futuro',
      content: ' Cilene Izidoria de Souza'
    },
    {
      type: 'CCA Beija-Flor',
      content: ' Edna de Oliveira Dantas'
    },
    {
      type: 'CCA Canarinho',
      content: 'Maria Sueli Passerine da Silva'
    },
    {
      type: 'Núcleo Profissionalizante',
      content: ' Rogério Silva Xavier'
    }
  ];
}
