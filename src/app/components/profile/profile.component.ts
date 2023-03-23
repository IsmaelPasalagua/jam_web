import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComoponent {
    name = 'utvt';
    following = 5001;
    followers = 10002;
  
    strengths = [{ text: 'English', level: 'Basic' }, { text: 'HTML', level: 'High' }, { text: 'Testing', level: 'Low' }];
  
    people = [
      {
        "name": "Vanessa M.",
        "age": 16,
        "color": 'red'
      },
      {
        "name": "Carlos Angulo",
        "age": 25,
        "color": 'green'
      },
      {
        "name": "Maleja",
        "age": 21,
        "color": 'pink'
      }
    ];
  
  }
  