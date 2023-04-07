import { Injectable } from '@angular/core';
import { routes } from './routes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private path="http://127.0.0.1:8080/api/post";
  
  constructor(private http: HttpClient, private authService: AuthService) { }

  post(data: any) {
    const headers = this.authService.headers(); 
    return this.http.post<any>(this.path, data, { headers: headers }); 
  }
}
