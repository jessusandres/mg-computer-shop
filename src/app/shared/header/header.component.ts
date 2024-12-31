import { RouterLink } from '@angular/router';
import {
  Component,
  ElementRef,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';

/* Project */
import { productSymbol } from '@app/helpers';
import { AuthStateProvider } from '@app/providers/auth-state.provider';
import { LocalAuthService } from '@app/services/local-auth.service';
import { TUser } from '@app/types';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { MenusStateProvider } from '@app/providers/menus-state.provider';
import { CartStateProvider } from '@app/providers/cart-state.provider';
import { CurrencyStateProvider } from '@app/providers/currency-state.provider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TooltipComponent, NgForOf, RouterLink, NgIf, NgOptimizedImage],
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

  currency!: string;
  displayMenu: boolean = false;
  displaySidebarMenu!: boolean;

  user?: TUser | null | undefined;

  @ViewChild('menu') menu!: ElementRef;

  constructor(
    private readonly renderer: Renderer2,
    private readonly menusStateProvider: MenusStateProvider,
    private readonly authStateProvider: AuthStateProvider,
    private readonly cartStateProvider: CartStateProvider,
    private readonly currencyStateProvider: CurrencyStateProvider,
    private readonly localAuthService: LocalAuthService,
  ) {
    this.outsideListener = this.renderer.listen(
      'window',
      'click',
      this.outsideCallback.bind(this),
    );

    this.menusStateProvider.showSidebarMenu$.subscribe((showSidebarMenu) => {
      this.displaySidebarMenu = showSidebarMenu;
    });

    this.currencyStateProvider.selectedCurrency$.subscribe((currency) => {
      this.currency = currency;
    });

    this.authStateProvider.user$.subscribe((user) => {
      this.user = user;
    });
  }

  outsideCallback(e: Event) {
    if (!this.menu.nativeElement.contains(e.target)) {
      this.displayMenu = false;
    }
  }

  openSidebarMenu(event: Event) {
    event.stopPropagation();
    this.menusStateProvider.setSidebarMenu(true);
  }

  closeSidebarMenu() {
    this.menusStateProvider.setSidebarMenu(false);
  }

  toggleMenu() {
    this.displayMenu = !this.displayMenu;
  }

  openCart(event: Event) {
    event.stopPropagation();
    this.menusStateProvider.openLateralCart();
  }

  logout() {
    this.localAuthService.logout();
  }

  login() {
    this.localAuthService.login();
  }

  get cartItemsLength(): number {
    return this.cartStateProvider.cartProducts.length;
  }

  get cartProductsTotal(): number {
    return this.cartStateProvider.cartProductsTotal;
  }

  get initials() {
    if (!this.user) {
      return '';
    }

    if (!this.user.name) {
      return 'U';
    }

    const splitNames = this.user.name.split(' ');
    let initials = '';

    splitNames.forEach((name, index) => {
      if (index <= 1) {
        initials += `${name[0]}`;
      }
    });

    return initials;
  }

  ngOnDestroy() {
    this.outsideListener();
  }

  protected readonly productSymbol = productSymbol;
}
