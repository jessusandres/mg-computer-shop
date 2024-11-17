import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/* Extra */
import { initFlowbite } from 'flowbite';

/* Project */
import { HomeStateProvider } from './providers/home-state.provider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HomeStateProvider],
})
export class AppComponent {
  title = 'mg-computer-shop';

  constructor() {}

  ngOnInit(): void {
    initFlowbite();
  }
}
