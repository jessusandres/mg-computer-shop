import { Component } from '@angular/core';
import { HomeStateProvider } from '@app/providers/home-state.provider';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss',
})
export class FeaturedComponent {
  constructor(private readonly homeStateProvider: HomeStateProvider) {
    this.homeStateProvider.setCategoriesMenu(false);
  }
}
