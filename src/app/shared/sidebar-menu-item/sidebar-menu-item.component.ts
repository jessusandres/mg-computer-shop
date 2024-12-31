import { Component, Input, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

/* Project */
import { TCategory } from '@app/types';
import { SidebarMenuSubItemComponent } from '@app/shared/sidebar-menu-sub-item/sidebar-menu-sub-item.component';
import { MenusStateProvider } from '@app/providers/menus-state.provider';

@Component({
  selector: 'app-sidebar-menu-item',
  standalone: true,
  imports: [NgForOf, NgIf, SidebarMenuSubItemComponent],
  templateUrl: './sidebar-menu-item.component.html',
  styleUrl: './sidebar-menu-item.component.scss',
  providers: [],
})
export class SidebarMenuItemComponent implements OnInit {
  @Input({
    alias: 'category',
    required: true,
  })
  category!: TCategory;
  isSelected!: boolean;
  protected readonly Array = Array;

  constructor(private menusStateProvider: MenusStateProvider) {}

  ngOnInit() {
    setTimeout(() => {
      this.menusStateProvider.selectedCategory$.subscribe(
        (selectedCategoryId) => {
          this.isSelected = selectedCategoryId === this.category.id;
        },
      );
    });
  }

  setSelectedCategoryId() {
    this.menusStateProvider.setSelectedCategoryId(this.category.id);
  }

  handleRouter(id: number) {
    console.log('==> pushing to route:', this.category.id, id);
    this.menusStateProvider.setSidebarMenu(false);
  }
}
