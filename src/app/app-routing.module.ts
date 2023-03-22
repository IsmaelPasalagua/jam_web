import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ProfileComoponent } from './components/profile/profile.component';

const routes: Routes = [
{
  path: "profile",
  component: ProfileComoponent
  
}

];



=======
//IMPORTS
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
];
>>>>>>> 9d54c9a419b12e63e9496fb84dbd324c228e1e7c

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
