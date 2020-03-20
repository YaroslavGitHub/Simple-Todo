import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core'
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated().then( isAuth =>{
        if (isAuth) {
          return true
        } else {
          this.router.navigate(['/'], {
            queryParams: {
              auth: false
            }
          })
        }
      })
    }
  }
