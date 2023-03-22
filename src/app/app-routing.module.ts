import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//IMPORTS
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComoponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComoponent
  },
  {
    path: "login",
    component: LoginComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
