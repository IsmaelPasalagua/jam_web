import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//IMPORTS
import { LoginComponent } from './components/auth/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfileComoponent } from './components/profile/profile.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';


const routes: Routes = [
  {
    path: "profile",
    component: ProfileComoponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "publicaciones",
    component: PublicacionesComponent
  },
  {
    path: "modal",
    component: ModalComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
