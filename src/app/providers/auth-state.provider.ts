import { Injectable } from '@angular/core';

/* Extra */
import { BehaviorSubject } from 'rxjs';

/* Project */
import { TUser } from '@app/types';

@Injectable({
  providedIn: 'root',
})
export class AuthStateProvider {
  private _user = new BehaviorSubject<TUser | null | undefined>(null);
  user$ = this._user.asObservable();

  constructor() {}

  setUser(user: TUser | null | undefined) {
    this._user.next(user);
  }
}
