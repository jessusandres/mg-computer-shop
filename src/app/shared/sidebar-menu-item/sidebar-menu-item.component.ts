import { Component, Input, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

/* Project */
import { TCategory } from '@app/types';
import { HomeStateProvider } from '@app/providers/home-state.provider';
import { SidebarMenuSubItemComponent } from '@app/shared/sidebar-menu-sub-item/sidebar-menu-sub-item.component';

@Component({
  selector: 'app-sidebar-menu-item',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLinkActive,
    RouterLink,
    SidebarMenuSubItemComponent,
  ],
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

  constructor(private homeStateProvider: HomeStateProvider) {}

  ngOnInit() {
    setTimeout(() => {
      this.homeStateProvider.selectedCategory$.subscribe(
        (selectedCategoryId) => {
          this.isSelected = selectedCategoryId === this.category.id;
        },
      );
    });
  }

  setSelectedCategoryId() {
    this.homeStateProvider.setSelectedCategoryId(this.category.id);
  }

  handleRouter(id: number) {
    console.log('==> pushing to route:', this.category.id, id);
    this.homeStateProvider.setSidebarMenu(false);
  }

  protected readonly Array = Array;
}
