import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public userService: UsersService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.userService.user) {
      window.alert('Brak dostępu do podanej ścieżki! Prawdopodobnie nie jesteś zalogowany');
      this.router.navigate(['login']);
    }
    return true;
  }
}