import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: 'contato.component.html',
  styleUrls: ['contato.component.scss']
})
export class ContatoComponent {
  name = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');

  constructor() {}

  nucleos = [
    {
      title: 'CEI Brincando Também se Aprende',
      tel: ' 11 3983-3867',
      email: 'bta@caminhandofuturo.org.br'
    },
    {
      title: 'CEI Girassol',
      tel: ' 11 3986-0516',
      email: 'girassol@caminhandofuturo.org.br'
    },
    {
      title: 'CEI Pingo de Gente',
      email: 'pingodengente@caminhandofuturo.org.br',
      tel: ' 11 3851-9034'
    },
    {
      title: 'CEI Primeiros Passos',

      email: 'primeirospassos@caminhandofuturo.org.br',
      tel: ' 11 3989-3383'
    },
    {
      title: 'CEI Téquinho do Céu',
      email: 'tequinho@caminhandofuturo.org.br',
      tel: '11 3984-9889'
    }
  ];

  cca = [
    {
      title: 'CCA Arte na Rua',
      tel: ' 11 3921-9107',
      email: 'artenarua@caminhandofuturo.org.br'
    },
    {
      title: 'CCA Beija-Flor',
      tel: ' 11 3922-7188',
      email: 'beijaflor@caminhandofuturo.org.br'
    },
    {
      title: 'CCA Caminhando',
      email: 'cpf@caminhandofuturo.org.br',
      tel: ' 11 3984-8625'
    },
    {
      title: 'CCA Canarinho',
      email: 'canarinho@caminhandofuturo.org.br',
      tel: ' 11 3921-7324'
    }
  ];

  sendEmail() {
    // const gmail = require('googleapis');
    // let gmailClass = gmail.gmail('v1');
    // gmailClass.users.messages.send({
    // })
    //   const nodemailer = require('nodemailer');
    //   const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'caminhando.projeto.site@gmail.com',
    //       pass: 'tesaiga27'
    //     }
    //   });
    //   const mailOptions = {
    //     from: 'caminhando.projeto.site@gmail.com',
    //     to: 'leo.campa@hotmail.com',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    //   };
    //   transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   });
    // }
  }
}
