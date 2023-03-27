import { Component } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})

export class PublicacionesComponent {

  openModal() {
    const modal = document.querySelector('.modal');
    modal?.classList.add('is-active');
  }
  closeModal() {
    const modal = document.querySelector('.modal');
    modal?.classList.remove('is-active');
  }

}
