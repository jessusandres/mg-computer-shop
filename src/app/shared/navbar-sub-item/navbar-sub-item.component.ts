import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

/* Project */
import { TSubCategory } from '@app/types';
import { MenusStateProvider } from '@app/providers/menus-state.provider';

@Component({
  selector: 'app-navbar-sub-item',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar-sub-item.component.html',
  styleUrl: './navbar-sub-item.component.scss',
})
export class NavbarSubItemComponent implements OnInit {
  @Input({
    alias: 'sub-category',
    required: true,
  })
  subCategory!: TSubCategory;

  isSelected = false;

  constructor(
    private router: Router,
    private menusStateProvider: MenusStateProvider,
  ) {}

  ngOnInit() {
    const currentRoute = this.router.url;

    if (
      currentRoute ===
      `/shopfront/${this.subCategory.categoryId}/${this.subCategory.id}`
    ) {
      this.menusStateProvider.setSelectedCategoryId(
        this.subCategory.categoryId,
      );
    }
  }

  removeSelected() {
    this.isSelected = false;
  }

  markAsSelected() {
    this.isSelected = true;
  }
}
