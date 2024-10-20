import {
  Component,
  ElementRef,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgForOf } from '@angular/common';

/* Project */
import { TooltipComponent } from '../tooltip/tooltip.component';
import { HomeStateProvider } from '@app/providers/home-state.provider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TooltipComponent, NgForOf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  categories = [
    'Memoria ram',
    'Procesadores',
    'Tarjetas gráficas',
    'Almacenamiento',
    'Monitores',
    'Periféricos',
    'Software',
    'Otros',
    'Accesorios',
    'Memoria ram',
    'Procesadores',
    'Tarjetas gráficas',
    'Memoria ram',
    'Procesadores',
    'Tarjetas gráficas',
    'Almacenamiento',
    'Monitores',
    'Periféricos',
    'Software',
    'Otros',
    'Accesorios',
    'Memoria ram',
    'Procesadores',
    'Tarjetas gráficas',
  ];

  private readonly outsideListener: () => void;

  displayMenu: boolean = false;
  displaySidebarMenu!: boolean;

  @ViewChild('menu') menu!: ElementRef;

  constructor(
    private readonly renderer: Renderer2,
    private readonly homeStateProvider: HomeStateProvider,
  ) {
    this.outsideListener = this.renderer.listen(
      'window',
      'click',
      this.outsideCallback.bind(this),
    );

    this.homeStateProvider.showSidebarMenu$.subscribe((showSidebarMenu) => {
      this.displaySidebarMenu = showSidebarMenu;
    });
  }

  outsideCallback(e: Event) {
    if (!this.menu.nativeElement.contains(e.target)) {
      // console.log('==> outside callback');
      this.displayMenu = false;
    }
  }

  openSidebarMenu(event: Event) {
    event.stopPropagation();
    this.homeStateProvider.setSidebarMenu(true);
  }

  closeSidebarMenu() {
    this.homeStateProvider.setSidebarMenu(false);
  }

  toggleMenu() {
    this.displayMenu = !this.displayMenu;
  }

  ngOnDestroy() {
    // console.log('===> On destroy element');
    this.outsideListener();
  }
}
