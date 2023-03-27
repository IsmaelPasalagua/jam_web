import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComoponent implements OnInit {
  name = 'Andres Manuel Lopez Obrador';
  isLoading = false;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.isLoading = true;
    try {
      const token = sessionStorage.getItem('token');
      console.log(token)
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type' : 'application/json'
      });

      const res = await this.http.post<any>('http://127.0.0.1:8080/api/auth/user', {}, { headers }).toPromise();
      this.name = res.username;
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  }
}
  
    
  
  