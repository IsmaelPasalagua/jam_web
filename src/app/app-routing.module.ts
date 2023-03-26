import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//IMPORTS
import { LoginComponent } from './components/auth/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfileComoponent } from './components/profile/profile.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { RegisterComponent } from './components/register/register.component';
import { AcercaComponent } from './components/acerca/acerca.component';


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
  path: "register",
    component: RegisterComponent
  },
  {
    path: "acerca",
      component: AcercaComponent
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
