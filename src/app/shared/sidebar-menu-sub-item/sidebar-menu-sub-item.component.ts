import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { TSubCategory } from '@app/types';
import { MenusStateProvider } from '@app/providers/menus-state.provider';

@Component({
  selector: 'app-sidebar-menu-sub-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-menu-sub-item.component.html',
  styleUrl: './sidebar-menu-sub-item.component.scss',
})
export class SidebarMenuSubItemComponent implements OnInit {
  @Input({
    alias: 'sub-category',
    required: true,
  })
  subCategory!: TSubCategory;

  constructor(
    private router: Router,
    private menusStateProvider: MenusStateProvider,
  ) {}

  ngOnInit() {
    const currentRoute = this.router.url;

    if (
      currentRoute ===
      `/shopfront/${this.subCategory.categoryId}/${this.subCategory.id}/products`
    ) {
      this.menusStateProvider.setSelectedCategoryId(
        this.subCategory.categoryId,
      );
    }
  }
}
