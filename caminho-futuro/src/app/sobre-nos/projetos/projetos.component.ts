import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: 'projetos.component.html',
  styleUrls: ['projetos.component.scss']
})
export class ProjetosComponent {
  projetos = [
    {
      title: 'CEI - Centro de Educação Infatil',
      text:
        // tslint:disable-next-line: max-line-length
        'Centros de Educação Infantil, a primeira etapa da educação básica. Um direito da criança e suas famílias, os CEIs atendem crianças de 0 a 3 anos e onze meses, de segunda a sexta-feira das 7h00 às 17h00 horas. Promovem o desenvolvimento de saberes de acordo com cada faixa etária. Através de atividades educativas amparadas em projetos pedagógicos, o aprendizado ocorre por meio de brincadeiras e vivências lúdicas. Momentos de recreação traduzidos em formas de promover o início de uma consciência social baseada em direitos e deveres. O agir, o pensar, o sentir e o experimentar em ambiente acolhedor, alegre e propenso a formar pequenos cidadãos. Em sua rotina diária, os Centros de Educação Infantil oferecem atividades de educação e desenvolvimento pedagógico, cinco refeições completas e planejadas por nutricionistas, e o cuidado constante com a saúde e higiene.',
      img: '../../../assets/Sobre Nos/ic-cei.png'
    },
    {
      title: 'CCA - Centro de Crianças e Adolescentes',
      text:
        // tslint:disable-next-line: max-line-length
        'Os Centros para Crianças e Adolescentes são serviços que tem como principal objetivo a proteção integral à criança e adolescente que possa estar em situação de risco ou vulnerabilidade social. Através de atividades transdisciplinares incita o desenvolvimento intelectual ao mesmo tempo em que cria um ambiente de socialização. O respeito as diferenças, a convivência entre diversas culturas, raças e vivências facilitam a integração entre crianças e adolescentes. O público atendido nestes espaços são crianças e adolescentes de 6 a 14 anos e onze meses. De segunda a sexta-feira, período manhã e tarde, sempre alternados com o período escolar. Em sua rotina, os Centros para Crianças e Adolescentes aplicam atividades socioeducativas e recreativas com o amparo de projetos de desenvolvimento de diversas competências, de sustentabilidade a artes, filosofia e culinária, entre outras. Em seu ambiente acolhedor e incentivador são fornecidas quatro refeições diárias e o acompanhamento constante de profissionais preparados e qualificados para trabalhar o dia-a-dia deste público.',
      img: '../../../assets/Sobre Nos/ic-cca.png'
    },
    {
      title: 'Núcleo Educacional',
      text:
        // tslint:disable-next-line: max-line-length
        'Estruturado em conformidade com a Lei de Aprendizagem (LEI 10091/00)”. Contribui com o desenvolvimento integral de adolescentes, viabilizando o acesso ao mundo do trabalho, através de parcerias com empresas públicas e privadas; São selecionados através do perfil que leva em consideração a renda per capta e frequência escolar. Nossa demanda vem de adolescentes que passaram pelo atendimento dos nossos Centros Para Crianças e Adolescentes e que residam na comunidade e entorno.',
      img: '../../../assets/Sobre Nos/ic-pabb.png'
    }
  ];
}
