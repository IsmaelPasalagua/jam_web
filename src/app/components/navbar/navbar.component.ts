import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/auth/Post';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  miFormularioPost: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    summary: ['', [Validators.required, Validators.minLength(5)]]
  });
  
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

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private postService: PostService) {
    this.isAuth = authService.isAuth()
    this.isAdmin = authService.isAdmin()
  }

  post() {
    const postData: Post = {
      title: this.miFormularioPost.value.title,
      summary: this.miFormularioPost.value.summary
    };
    this.postService.post(postData).subscribe(
      (res) => {
        setTimeout(() => {
          this.router.navigate(['/']);
          this.closeModal();
        }, 1000);
      },
      (err) => {
      }
    );
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

