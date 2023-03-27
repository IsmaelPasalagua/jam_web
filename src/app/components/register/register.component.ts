import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private location: Location) {}
  
  onSubmit(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const name = (target.querySelector('#name') as HTMLInputElement).value;
    const email = (target.querySelector('#email') as HTMLInputElement).value;
    const password = (target.querySelector('#password') as HTMLInputElement).value;
    const confirmPassword = (target.querySelector('#confirmPassword') as HTMLInputElement).value;
  
    // Realiza la validación de los campos del formulario
    if (!name || !email || !password || !confirmPassword) {
      // Muestra un mensaje de error si algún campo está vacío
      alert('Todos los campos son obligatorios');
      return;
    }
    if (password !== confirmPassword) {
      // Muestra un mensaje de error si las contraseñas no coinciden
      alert('Las contraseñas no coinciden');
      return;
    }
  
    // Envía los datos al servidor
    const url = 'https://ejemplo.com/api/register';//aqui va la api
    const data = { name, email, password };
    this.http.post(url, data).subscribe(
      (response) => {
        // Muestra un mensaje de éxito si la solicitud se realizó correctamente
        alert('¡Registro exitoso!');
      },
      (error) => {
        // Muestra un mensaje de error si la solicitud falló
        alert('Error al registrar');
      }
    );
  }
  goBack() :void  {
    this.location.back();
  }
}
