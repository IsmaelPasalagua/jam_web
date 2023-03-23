import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//IMPORTS
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComoponent } from './components/profile/profile.component';
import { RegisterComponent} from './components/register/register.component';

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
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
