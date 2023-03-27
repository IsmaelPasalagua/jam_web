import { Injectable } from '@angular/core';
import { routes } from './routes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private path = routes.url + routes.user.prefix ;

    constructor( private http: HttpClient) {}

    user(){
        return this.http.get<any>(this.path + routes.user.username)
    }

    getUser() {
        const user = sessionStorage.getItem('user');
        return user ? JSON.parse(user): null;
    }





}