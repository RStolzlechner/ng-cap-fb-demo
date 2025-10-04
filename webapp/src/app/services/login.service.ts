import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private _isLoggedIn = signal<boolean>(false);

  public isLoggedIn = this._isLoggedIn.asReadonly();

  public login(username: string, pw: string) {
    this._isLoggedIn.set(true); //mocked
  }
}
