import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgForOf } from '@angular/common';

/* Project */
import { HomeStateProvider } from '@app/providers/home-state.provider';
import { TCategory } from '@app/types';
import { SidebarMenuItemComponent } from '../sidebar-menu-item/sidebar-menu-item.component';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [SidebarMenuItemComponent, NgForOf],
  providers: [],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent implements OnDestroy, OnInit {
  @ViewChild('sidebarMenu', { static: true }) sidebarMenuRef!: ElementRef;

  private readonly outsideListener: () => void;
  categories: TCategory[];
  showSidebarMenu!: boolean;
  selectedCategoryId!: number;

  constructor(
    private readonly renderer: Renderer2,
    readonly homeStateProvider: HomeStateProvider,
  ) {
    this.categories = this.homeStateProvider.categories;

    this.outsideListener = this.renderer.listen(
      'window',
      'click',
      this.outsideCallback.bind(this),
    );
  }

  ngOnInit() {
    this.homeStateProvider.showSidebarMenu$.subscribe((showSidebarMenu) => {
      this.showSidebarMenu = showSidebarMenu;
    });

    this.homeStateProvider.selectedCategory$.subscribe((selectedCategoryId) => {
      this.selectedCategoryId = selectedCategoryId;
    });
  }

  ngOnDestroy() {
    if (this.outsideListener) this.outsideListener();
  }

  outsideCallback(event: Event) {
    const outside = !this.sidebarMenuRef.nativeElement.contains(event.target);

    if (outside) this.homeStateProvider.setSidebarMenu(false);
  }
}