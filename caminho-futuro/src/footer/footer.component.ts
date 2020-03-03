import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent {

  constructor(private readonly router: Router) { }


  redirect() {
    window.open('https://www.facebook.com/caminhando1975/');
  }
}
