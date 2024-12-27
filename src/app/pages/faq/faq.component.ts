import { Component } from '@angular/core';
import { HomeStateProvider } from '@app/providers/home-state.provider';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  constructor(private readonly homeStateProvider: HomeStateProvider) {
    this.homeStateProvider.setCategoriesMenu(false);
  }
}
