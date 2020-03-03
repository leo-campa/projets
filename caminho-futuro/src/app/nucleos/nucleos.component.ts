import { Component } from '@angular/core';

@Component({
  selector: 'app-nucleos',
  templateUrl: 'nucleos.component.html',
  styleUrls: ['nucleos.component.scss']
})
export class NucleosComponent {
  nucleos = [
    {
      title: 'CEI Brincando Também se Aprende',
      img: '../../assets/Nucleos/img_brincando_tambem_aprende.png',
      item1:
        '95 crianças atendidas, faixa etária de 2 a 3 anos e 11 meses de idade',
      item2: 'R. dos Patis, 308 - Vila Nova Cachoeirinha',
      tel: ' 11 3983-3867',
      email: 'bta@caminhandofuturo.org.br'
    },
    {
      title: 'CEI Girassol',
      img: '../../assets/Nucleos/img_girassol.png',
      item1: '60 crianças atendidas, faixa etária de 3 a 4 anos de idade ',
      item2: 'R. Herman Rechter, 08 - Vila Penteado',
      tel: ' 11 3986-0516',
      email: 'girassol@caminhandofuturo.org.br'
    },
    {
      title: 'CEI Pingo de Gente',
      img: '../../assets/Nucleos/img_pingodegente.png',
      item1: '137 crianças atendidas, faixa etária de 0 a 3 anos de idade ',
      item2: 'R. Daniel Pereira, 238 - Parque Tietê',
      email: 'pingodengente@caminhandofuturo.org.br',
      tel: ' 11 3851-9034'
    },
    {
      title: 'CEI Primeiros Passos',
      img: '../../assets/Nucleos/img_primeiros_passos.png',
      item1:
        '141 crianças atendidas, faixa etária de 1 a 3 anos e 11 meses de idade ',
      item2: 'R. Morato de Oliveira , 400',
      email: 'primeirospassos@caminhandofuturo.org.br',
      tel: ' 11 3989-3383'
    },
    {
      title: 'CEI Téquinho do Céu',
      img: '../../assets/Nucleos/img_tequinhodeceu.png',
      item1: '147 crianças atendidas, faixa etária de 3 a 4 anos',
      item2: 'Pça. Jequié, 38- Jdim Maracanã',
      email: 'tequinho@caminhandofuturo.org.br',
      tel: '11 3984-9889'
    }
  ];

  cca = [
    {
      title: 'CCA Arte na Rua',
      img: '../../assets/Nucleos/img_artenarua.png',
      item1:
        '121 crianças atendidas, faixa etária de 6 a 15 anos e 11 meses de idade',
      item2: 'Rua Eduardo Costa, 192 – Jdim Damasceno',
      tel: ' 11 3921-9107',
      email: 'artenarua@caminhandofuturo.org.br'
    },
    {
      title: 'CCA Beija-Flor',
      img: '../../assets/Nucleos/img_beija_flor.png',
      item1: '240 crianças atendidas, faixa etária de 6 a 15 anos de idade ',
      item2: 'Rua Ubaldo Mendes de Oliveira, 150-Jardim Carombé',
      tel: ' 11 3922-7188',
      email: 'beijaflor@caminhandofuturo.org.br'
    },
    {
      title: 'CCA Caminhando',
      img: '../../assets/Nucleos/img_caminhando.png',
      item1: '184 crianças atendidas, faixa etária de 6 a 15 anos de idade ',
      item2: 'R. Cunhanrequaro,93 – Jardim Peri Alto ',
      email: 'cpf@caminhandofuturo.org.br',
      tel: ' 11 3984-8625'
    },
    {
      title: 'CCA Canarinho',
      img: '../../assets/Nucleos/img_canarinho.png',
      item1: '180 crianças atendidas, faixa etária de 6 a 15 anos de idade ',

      item2: 'R. Raimundo carneiro, 180, Jardim Carombé',
      email: 'canarinho@caminhandofuturo.org.br',
      tel: ' 11 3921-7324'
    }
  ];
}
