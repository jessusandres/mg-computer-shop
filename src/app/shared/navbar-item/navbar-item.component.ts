import { Component, Input, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

/* Project */
import { TCategory } from '@app/types';
import { NavbarSubItemComponent } from '@app/shared/navbar-sub-item/navbar-sub-item.component';
import { MenusStateProvider } from '@app/providers/menus-state.provider';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [NgForOf, NgIf, NavbarSubItemComponent],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss',
})
export class NavbarItemComponent implements OnInit {
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

  removeSelectedCategoryId() {
    this.menusStateProvider.setSelectedCategoryId(0);
  }

  itemClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
