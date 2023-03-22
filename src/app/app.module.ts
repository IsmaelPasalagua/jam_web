import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProfileComoponent } from './components/profile/profile.component';

@NgModule({
  declarations: [

    AppComponent,
    ProfileComoponent
=======
//IMPORTS
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
>>>>>>> 9d54c9a419b12e63e9496fb84dbd324c228e1e7c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
