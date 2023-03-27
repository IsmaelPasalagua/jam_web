import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Register } from 'src/app/models/auth/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit, OnDestroy{

  formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private authService: AuthService
    ) {
      this.formRegister = formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
    } 

    ngOnInit() {}

    Register(){
      const userRegister: Register = {
        username: this.formRegister.value.username,
        email: this.formRegister.value.email,
        password: this.formRegister.value.password,
      };
      this.authService.register(userRegister).subscribe(
        (res) => {
          this.authService.setToken(res.token);
          setTimeout(() => {
            this.router.navigate(['/']);
          },1000);
        },
        (err) => {
          // console.log('error', err.error.error);
        }
      );
    }

  ngOnDestroy(){}

  goBack() :void  {
    this.location.back();
  }
}


// onSubmit(event: Event) {
  //   event.preventDefault();
  //   const target = event.target as HTMLFormElement;
  //   const name = (target.querySelector('#name') as HTMLInputElement).value;
  //   const email = (target.querySelector('#email') as HTMLInputElement).value;
  //   const password = (target.querySelector('#password') as HTMLInputElement).value;
  //   const confirmPassword = (target.querySelector('#confirmPassword') as HTMLInputElement).value;
  
  //   // Realiza la validación de los campos del formulario
  //   if (!name || !email || !password || !confirmPassword) {
  //     // Muestra un mensaje de error si algún campo está vacío
  //     alert('Todos los campos son obligatorios');
  //     return;
  //   }
  //   if (password !== confirmPassword) {
  //     // Muestra un mensaje de error si las contraseñas no coinciden
  //     alert('Las contraseñas no coinciden');
  //     return;
  //   }
  
  //   // Envía los datos al servidor
  //   const url = 'https://ejemplo.com/api/register';//aqui va la api
  //   const data = { name, email, password };
  //   this.http.post(url, data).subscribe(
  //     (response) => {
  //       // Muestra un mensaje de éxito si la solicitud se realizó correctamente
  //       alert('¡Registro exitoso!');
  //     },
  //     (error) => {
  //       // Muestra un mensaje de error si la solicitud falló
  //       alert('Error al registrar');
  //     }
  //   );
  // }