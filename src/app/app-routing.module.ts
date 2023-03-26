import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//IMPORTS
import { LoginComponent } from './components/auth/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfileComoponent } from './components/profile/profile.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: "",
    component: PublicacionesComponent
  },
  {
    path: "profile",
    component: ProfileComoponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
  path: "register",
    component: RegisterComponent
  },
  {
    path: "modal",
    component: ModalComponent
  },
  {
    path: "",
    pathMatch: "full",
    component: PublicacionesComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
