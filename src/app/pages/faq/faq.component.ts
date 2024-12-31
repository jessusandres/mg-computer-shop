import { Component } from '@angular/core';

/* Project */
import { MenusStateProvider } from '@app/providers/menus-state.provider';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  constructor(private readonly menusStateProvider: MenusStateProvider) {
    this.menusStateProvider.setCategoriesMenu(false);
  }
}
