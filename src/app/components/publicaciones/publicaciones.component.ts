import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { format } from 'date-fns';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})

export class PublicacionesComponent {

  fecha = new Date();

  fechaString = format(this.fecha, 'dd/MM/yyyy');

  openModal() {
    const modal = document.querySelector('.modal');
    modal?.classList.add('is-active');
  }
  closeModal() {
    const modal = document.querySelector('.modal');
    modal?.classList.remove('is-active');
  }

}
