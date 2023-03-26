import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComoponent {
    name = 'Andres Manuel Lopez Sobrador';
    Seguidores = 850;
    Publcaciones = 80;
  
    strengths = [{ text: 'Cuatrimestre', level: 'Octavo' }, { text: 'Seguidos', level: '613' }];
  
    
  }
  