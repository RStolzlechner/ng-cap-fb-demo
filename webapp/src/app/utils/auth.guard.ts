import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const AuthGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  const isLoggedIn = loginService.isLoggedIn();

  if (!isLoggedIn) {
    router.navigate(['/login']);
  }

  return isLoggedIn;
};

export const NotAuthGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);

  const isLoggedIn = loginService.isLoggedIn();

  return !isLoggedIn;
};
