import {Injectable} from 'angular/core'

@Injectable({providedIn: 'root'})
export class AuthService {
  private isAuth = false

  login() {
    this.Auth = true
  }

  logout() {
    this.Auth = false
  }
}
