import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  
  openModal() {
    const modal = document.querySelector('.modal');
    modal?.classList.add('is-active');
  }
  closeModal() {
    const modal = document.querySelector('.modal');
    modal?.classList.remove('is-active');
  }
  

}
