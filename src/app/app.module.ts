import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComoponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComoponent,
    LoginComponent,
    ModalComponent,
    PublicacionesComponent,
    NavbarComponent,
    AcercaComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
