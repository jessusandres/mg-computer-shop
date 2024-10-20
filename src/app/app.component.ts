import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { initFlowbite } from 'flowbite';
import { HomeStateProvider } from './providers/home-state.provider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HomeStateProvider],
})
export class AppComponent {
  title = 'mg-computer-shop';

  ngOnInit(): void {
    initFlowbite();
  }
}
