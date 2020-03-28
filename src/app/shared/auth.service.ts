import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { User } from '../shared/interfaces';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import{ tap, catchError} from 'rxjs/operators'
import { FbAuthResponse } from '../shared/interfaces';
@Injectable()
export class AuthService {
  public e$: Subject<string> = new Subject<string>()
  constructor (private http: HttpClient) {}
    get token(): string {
      const expDate = new Date(localStorage.getItem('fb-token-exp'))
      if (new Date() > expDate) {
        this.logout()
        return null
      }
      return localStorage.getItem('fb-token')
    }

    login(user: User): Observable<any> {
      user.returnSecureToken = true
      return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
    }
    logout() {
      this.setToken(null)
    }
    isAuthenticated(): boolean {
      return !!this.token
    }
    private handleError(e: HttpErrorResponse) {
      const {message} = e.error.error
      switch (message) {
        case 'INVALID_EMAIL':
          this.e$.next('Wrong email')
          break
        case 'INVALID_PASSWORD':
          this.e$.next('Wrong password')
          break
        case 'EMAIL_NOT_FOUND':
          this.e$.next('This email not exist')
          break
      }
      return throwError(e)
    }
    private setToken(res: FbAuthResponse | null) {
      if (res) {
        const expDate = new Date(new Date().getTime() + +res.expiresIn * 1000)
      localStorage.setItem('fb-token', res.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
      } else {
        localStorage.clear()
      }

    }

}
