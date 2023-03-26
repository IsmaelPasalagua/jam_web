import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
// import { Location } from '@angular/common';

import { Login } from 'src/app/models/auth/login';
import { Subscription } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  subRef$: Subscription = new Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.formLogin = formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  Login() {
    const userLogin: Login = {
      user: this.formLogin.value.user,
      password: this.formLogin.value.password,
    };

    this.subRef$ = this.http.post<Response>('url',
      userLogin, { observe: 'response' })
      .subscribe(res => {
        const token = res;
        console.log('token', token);
        sessionStorage.setItem('token', '');
        this.router.navigate(['/']);
      }, err => {
        console.log('Error en el inicio de sesión', err)
      });
  }

  ngOnDestroy() {
    if (this.subRef$){
      this.subRef$.unsubscribe();
    }
  }

}
