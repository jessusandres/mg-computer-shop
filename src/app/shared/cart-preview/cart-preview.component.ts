import {
  Component,
  ElementRef,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

/* Project */
import { HomeStateProvider } from '@app/providers/home-state.provider';
import { TProductCart } from '@app/types';
import { NgForOf } from '@angular/common';
import { productPrice, productSymbol } from '@app/helpers';
import { MenusStateProvider } from '@app/providers/menus-state.provider';
import { CurrencyStateProvider } from '@app/providers/currency-state.provider';
import { CartStateProvider } from '@app/providers/cart-state.provider';

@Component({
  selector: 'cart-preview',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './cart-preview.component.html',
  styleUrl: './cart-preview.component.scss',
})
export class CartPreviewComponent implements OnDestroy {
  @ViewChild('cartPreviewRef', { static: true }) elementRef!: ElementRef;
  private readonly outsideListener!: () => void;

  currency!: string;
  display!: boolean;
  cartProducts!: TProductCart[];

  constructor(
    private renderer: Renderer2,
    private readonly homeStateProvider: HomeStateProvider,
    private readonly menusStateProvider: MenusStateProvider,
    private readonly currencyStateProvider: CurrencyStateProvider,
    private readonly cartStateProvider: CartStateProvider,
  ) {
    this.outsideListener = this.renderer.listen(
      'window',
      'click',
      this.outsideCallback.bind(this),
    );

    this.currencyStateProvider.selectedCurrency$.subscribe((currency) => {
      this.currency = currency;
    });

    this.menusStateProvider.cartLateral$.subscribe((display) => {
      this.display = display;
    });

    this.cartStateProvider.cartProducts$.subscribe(
      (cartProducts: TProductCart[]) => {
        this.cartProducts = cartProducts;
      },
    );
  }

  closeCart() {
    this.menusStateProvider.closeLateralCart();
  }

  outsideCallback(event: Event) {
    const outside = !this.elementRef.nativeElement.contains(event.target);

    if (outside) this.closeCart();
  }

  removeCartProduct(productId: number) {
    this.cartStateProvider.removeCartProduct(productId);
  }

  get cartProductsTotal(): number {
    return this.cartStateProvider.cartProductsTotal;
  }

  ngOnDestroy() {
    if (this.outsideListener) this.outsideListener();
  }

  protected readonly productPrice = productPrice;
  protected readonly productSymbol = productSymbol;
}
