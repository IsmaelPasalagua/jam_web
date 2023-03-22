import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import { Login } from 'src/app/models/auth/login';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
  }) export class LoginComponent{
    
  }
 /* 
  export class LoginComponent implements OnInit, OnDestroy {
    formLogin: FormGroup;
    loginError = false;
    loginErrorMessage = '';
    loginLoading = false;
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private location: Location,
      private authService: AuthService
    ) {
      if(authService.isAuth()){
        this.router.navigate([
          "/"
        ])
      }
      this.formLogin = formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
    
    ngOnInit() {}
  
    Login() {
      this.loginLoading = true
      this.loginError = false
      const login: Login = {
        email: this.formLogin.value.email,
        password: this.formLogin.value.password,
      };
      this.authService.login(login)
        .subscribe(
          (res) => {
            const token = res.token;
            // console.log('token', token);
            this.authService.setToken(token)
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 1000);
          },
          (err) => {
            console.log('error', err.error.error);
            this.loginErrorMessage = err.error.error;
            this.loginError = true;
            this.loginLoading = false;
          }
        );
    }
  
    ngOnDestroy() {
    }
  
    goBack(): void {
      this.location.back();
    }
  }
*/