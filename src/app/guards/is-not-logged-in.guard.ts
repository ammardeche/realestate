import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isNotLoggedInGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const auth: AuthService = inject(AuthService);
  const isLoggedIn = auth.isLoggedInNow();
  if (!isLoggedIn) return true;
  else {
    router.navigate(['/']);
    return false;
  }
};
