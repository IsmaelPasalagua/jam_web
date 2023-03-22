import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComoponent } from './components/profile/profile.component';

const routes: Routes = [
{
  path: "profile",
  component: ProfileComoponent
  
}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
