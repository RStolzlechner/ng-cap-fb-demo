import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  template: `<button (click)="logIn()">Log In</button>`,
  imports: [CommonModule],
})
export class LoginComponent {
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);

  logIn() {
    this.loginService.login('A', 'B');
    this.router.navigate(['']);
  }
}
