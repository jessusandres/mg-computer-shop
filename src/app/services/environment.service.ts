import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  static BACKEND_URL = import.meta.env['NG_APP_BACKEND_URL'];
  static LOGIN_URL = `${EnvironmentService.BACKEND_URL}/auth/auth0/login`;
  static LOGOUT_URL = `${EnvironmentService.BACKEND_URL}/auth/auth0/logout`;

  constructor() {}

  removeToken() {
    localStorage.removeItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
