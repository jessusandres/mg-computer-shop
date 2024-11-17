import { Component, Input, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

/* Project */
import { TCategory } from '@app/types';
import { HomeStateProvider } from '@app/providers/home-state.provider';
import { NavbarSubItemComponent } from '@app/shared/navbar-sub-item/navbar-sub-item.component';

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

  removeSelectedCategoryId() {
    this.homeStateProvider.setSelectedCategoryId(0);
  }
}
