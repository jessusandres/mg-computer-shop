import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/* Extra */
import { initFlowbite } from 'flowbite';

/* Project */
import { HomeStateProvider } from './providers/home-state.provider';
import { LocalAuthService } from '@app/services/local-auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HomeStateProvider],
})
export class AppComponent implements AfterViewInit {
  appName = import.meta.env['NG_APP_NAME'];
  title = 'mg-computer-shop';

  constructor(private readonly localAuthService: LocalAuthService) {
    console.log({ msg: `Welcome ${this.appName}` });
    this.localAuthService.fillUser();
  }

  ngAfterViewInit(): void {
    console.log('initFlowbite');
    initFlowbite();
  }
}
