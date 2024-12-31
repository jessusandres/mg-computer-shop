import { Component } from '@angular/core';

/* Project */
import { MenusStateProvider } from '@app/providers/menus-state.provider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(private readonly menusStateProvider: MenusStateProvider) {
    this.menusStateProvider.setCategoriesMenu(false);
  }
}
