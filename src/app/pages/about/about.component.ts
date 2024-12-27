import { Component } from '@angular/core';
import { HomeStateProvider } from '@app/providers/home-state.provider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(private readonly homeStateProvider: HomeStateProvider) {
    this.homeStateProvider.setCategoriesMenu(false);
  }
}
