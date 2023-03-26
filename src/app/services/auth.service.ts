import { Injectable } from '@angular/core';
import { routes } from './routes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private path = routes.url + routes.auth.prefix;

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(this.path + routes.auth.login, data);
  }

  register(data: any) {
    return this.http.post<any>(this.path + routes.auth.register, data);
  }

  user() {
    return this.http.post<any>(this.path + routes.auth.register, '', {
      headers: this.headers(),
    });
  }

  headers() {
    return new HttpHeaders().append(
      'Authorization',
      'Bearer ' + this.getToken()
    );
  }

  setToken(token: any) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  setUser(user: any) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isAuth() {
    try {
      if (this.getUser()) {
        return true;
      }
    } catch {}
    return false;
  }

  isAdmin() {
    try {
      if (this.getUser().role == 'ADMIN') {
        return true;
      }
    } catch {}
    return false;
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
}
