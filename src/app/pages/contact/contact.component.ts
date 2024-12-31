import { Component } from '@angular/core';

/* Project */
import { MenusStateProvider } from '@app/providers/menus-state.provider';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private readonly menusStateProvider: MenusStateProvider) {
    this.menusStateProvider.setCategoriesMenu(false);
  }
}
