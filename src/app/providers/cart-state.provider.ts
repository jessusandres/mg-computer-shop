import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TProductCart } from '@app/types';
import { loadStorageCart, productPrice } from '@app/helpers';
import { MenusStateProvider } from '@app/providers/menus-state.provider';
import { CurrencyStateProvider } from '@app/providers/currency-state.provider';

@Injectable({
  providedIn: 'root',
})
export class CartStateProvider {
  private _cartProducts = new BehaviorSubject<TProductCart[]>([]);
  cartProducts$ = this._cartProducts.asObservable();

  constructor(
    private readonly menusStateProvider: MenusStateProvider,
    private readonly currencyStateProvider: CurrencyStateProvider,
  ) {
    console.log('===> init??');
    loadStorageCart().then((cart) => {
      // this._cartProducts.next(loadStorageCart());
      this._cartProducts.next(cart);
    });
  }

  addProductToCart(productCart: TProductCart, showLateral = false) {
    const existsProduct = [...this._cartProducts.getValue()].find(
      (product) => product.id === productCart.id,
    );

    console.log({ existsProduct, productCart });

    if (existsProduct) {
      const previousAmount = existsProduct.quantity;
      this.removeCartProduct(existsProduct.id);

      this._cartProducts.next([
        ...this._cartProducts.getValue(),
        { ...productCart, quantity: productCart.quantity + previousAmount },
      ]);
    } else {
      this._cartProducts.next([...this._cartProducts.getValue(), productCart]);
    }

    // Save into local storage
    localStorage.setItem('cart', JSON.stringify(this._cartProducts.getValue()));

    if (showLateral) {
      this.menusStateProvider.openLateralCart();
    }
  }

  removeCartProduct(id: number) {
    const newCartItems = this._cartProducts
      .getValue()
      .filter((product) => product.id !== id);
    this._cartProducts.next(newCartItems);

    localStorage.setItem('cart', JSON.stringify(newCartItems));
  }

  get cartProductsTotal() {
    const cartTotalAMount = this._cartProducts
      .getValue()
      .reduce((acc, product) => {
        return (
          acc +
          productPrice(this.currencyStateProvider.selectedCurrency, product) *
            product.quantity
        );
      }, 0);

    return Math.round((cartTotalAMount + Number.EPSILON) * 100) / 100;
  }

  get cartProducts() {
    return this._cartProducts.value;
  }
}
