import { Injectable } from '@angular/core';

/* Project */
import { AuthStateProvider } from '@app/providers/auth-state.provider';
import { UserService } from '@app/services/user.service';
import { EnvironmentService } from '@app/services/environment.service';

@Injectable({
  providedIn: 'root',
})
export class LocalAuthService {
  constructor(
    private readonly authStateProvider: AuthStateProvider,
    private readonly userService: UserService,
    private readonly environmentService: EnvironmentService,
  ) {}

  async fillUser() {
    const currentUser = await this.userService.fetchProfile();

    if (currentUser?.email) {
      return this.authStateProvider.setUser(currentUser);
    }

    this.removeLocalSession();
  }

  login() {
    window.location.href = EnvironmentService.LOGIN_URL;
  }

  logout() {
    window.location.href = EnvironmentService.LOGOUT_URL;
  }

  removeLocalSession() {
    this.authStateProvider.setUser(null);
    this.environmentService.removeToken();
  }
}
