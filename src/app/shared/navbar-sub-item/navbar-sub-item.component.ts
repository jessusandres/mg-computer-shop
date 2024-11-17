import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

/* Project */
import { HomeStateProvider } from '@app/providers/home-state.provider';
import { TSubCategory } from '@app/types';

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
    private homeStateProvider: HomeStateProvider,
  ) {}

  ngOnInit() {
    const currentRoute = this.router.url;

    if (
      currentRoute ===
      `/shopfront/${this.subCategory.categoryId}/${this.subCategory.id}/products`
    ) {
      this.homeStateProvider.setSelectedCategoryId(this.subCategory.categoryId);
    }
  }

  removeSelected() {
    this.isSelected = false;
  }

  markAsSelected() {
    this.isSelected = true;
  }
}
