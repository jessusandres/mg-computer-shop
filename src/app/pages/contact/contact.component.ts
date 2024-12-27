import { Component } from '@angular/core';
import { HomeStateProvider } from '@app/providers/home-state.provider';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private readonly homeStateProvider: HomeStateProvider) {
    this.homeStateProvider.setCategoriesMenu(false);
  }
}
