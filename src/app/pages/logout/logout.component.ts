import { Component } from '@angular/core';
import { Router } from '@angular/router';

/* Project */
import { LocalAuthService } from '@app/services/local-auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  constructor(
    private readonly localAuthService: LocalAuthService,
    private router: Router,
  ) {
    this.localAuthService.removeLocalSession();
    this.router.navigate(['/']);
  }
}
