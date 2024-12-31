import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/* Project */
import { EnvironmentService } from '@app/services/environment.service';
import { LocalAuthService } from '@app/services/local-auth.service';

// declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly environmentService: EnvironmentService,
    private readonly localAuthService: LocalAuthService,
  ) {
    const localToken = localStorage.getItem('token');

    if (localToken) {
      this.router.navigate(['/']);
    }

    this.route.queryParams.subscribe((params) => {
      const token = params['token'];

      if (token) {
        this.environmentService.setToken(token);
        this.localAuthService.fillUser();
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    // console.log({
    //   appName: this.appName,
    //   clientId: this.clientId,
    //   loginUrl: this.loginUrl,
    // });
    //
    // google.accounts.id.initialize({
    //   client_id: this.clientId,
    //   callback: this.handleCredentialResponse.bind(this),
    //   use_fedcm_for_prompt: true,
    //   // ux_mode: 'redirect',
    //   login_uri: this.loginUrl,
    // });
    //
    // google.accounts.id.renderButton(document.getElementById('signinDiv'), {
    //   theme: 'outline',
    //   size: 'large',
    //   shape: 'circle',
    //   // type: 'icon',
    //   click_listener: this.onClickHandler,
    // });
    //
    // google.accounts.id.prompt();
  }

  // onClickHandler() {
  //   console.log('Sign in with Google button clicked...');
  // }

  // handleCredentialResponse(response: any) {
  //   console.log('===> handleCredentialResponse');
  //   const payload = response;
  //   const form = document.createElement('form');
  //   form.style.visibility = 'hidden';
  //   form.method = 'POST';
  //   form.action = this.loginUrl;
  //
  //   for (const key of Object.keys(payload)) {
  //     const input = document.createElement('input');
  //
  //     input.name = key;
  //     input.value = payload[key];
  //     form.appendChild(input);
  //   }
  //
  //   document.body.appendChild(form);
  //   form.submit();
  // }
}
