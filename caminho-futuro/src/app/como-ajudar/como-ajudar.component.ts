import { Component } from '@angular/core';

@Component({
  selector: 'app-como-ajudar',
  templateUrl: 'como-ajudar.component.html',
  styleUrls: ['como-ajudar.component.scss']
})
export class ComoAjudarComponent {

  hideImage = true;

  showBank() {
    this.hideImage = false;
  }
}
