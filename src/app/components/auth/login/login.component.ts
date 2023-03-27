import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Login } from 'src/app/models/auth/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {
    this.formLogin = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  Login() {
    const userLogin: Login = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password,
    };
    this.authService.login(userLogin).subscribe(
      (res) => {
        this.authService.setToken(res.token);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      },
      (err) => {
        // console.log('error', err.error.error);
      }
    );
  }

  ngOnDestroy() {}

  goBack(): void {
    this.location.back();
  }
}
