import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  openModal() {
    const modal = document.querySelector('.modal');
    modal?.classList.add('is-active');
  }
  closeModal() {
    const modal = document.querySelector('.modal');
    modal?.classList.remove('is-active');
  }

  isAuth = false;
  isAdmin = false;
  isLoading = false;

  constructor(private router: Router, private authService: AuthService) {
    this.isAuth = authService.isAuth()
    this.isAdmin = authService.isAdmin()
  }


  logout() {
    this.isLoading = true
    this.authService.logout()
    setTimeout(() => {
      this.isLoading = false
      this.router.navigate(['/login'])
    }, 250)
  }
  
}
