import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

/* Project */
import { LocalAuthService } from '@app/services/local-auth.service';
import { HomeStateProvider } from './providers/home-state.provider';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HomeStateProvider],
})
export class AppComponent implements OnInit {
  appName = import.meta.env['NG_APP_NAME'];
  title = 'mg-computer-shop';

  constructor(
    private readonly localAuthService: LocalAuthService,
    private readonly router: Router,
  ) {
    console.log({ msg: `Welcome ${this.appName}` });
    this.localAuthService.fillUser();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd');
        setTimeout(() => {
          initFlowbite();
        });
      }
    });
  }
}
