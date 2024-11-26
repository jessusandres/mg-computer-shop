import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/* Project */
import { Currencies, Categories, Menus, Products } from '@app/data';
import { generateRandom, loadStorageCart, productPrice } from '@app/helpers';
import { TProduct, TProductCart } from '@app/types';

@Injectable({
  providedIn: 'root',
})
export class HomeStateProvider {
  private _menus = Menus;
  private _currencies = Currencies;
  private _categories = Categories;
  private _products = Products;

  private _modalActive = new BehaviorSubject<boolean>(false);
  private _showSidebarMenu = new BehaviorSubject<boolean>(false);
  private _selectedCategoryId = new BehaviorSubject<number>(0);
  private _selectedCurrency = new BehaviorSubject<string>('PEN');
  private _exchangeValue = new BehaviorSubject<number>(0);
  private _productModal = new BehaviorSubject<TProduct | undefined>(undefined);
  private _cartProducts = new BehaviorSubject<TProductCart[]>([]);
  private _cartLateral = new BehaviorSubject<boolean>(false);

  modalActive$ = this._modalActive.asObservable();
  showSidebarMenu$ = this._showSidebarMenu.asObservable();
  selectedCategory$ = this._selectedCategoryId.asObservable();
  selectedCurrency$ = this._selectedCurrency.asObservable();
  exchangeValue$ = this._exchangeValue.asObservable();
  productModal$ = this._productModal.asObservable();
  cartLateral$ = this._cartLateral.asObservable();
  cartProducts$ = this._cartProducts.asObservable();

  constructor() {
    this.fetchExchangeType(this._selectedCurrency.getValue());

    console.log('===> init??');
    loadStorageCart().then((cart) => {
      // this._cartProducts.next(loadStorageCart());
      console.log({
        cart,
      });

      this._cartProducts.next(cart);
    });
  }

  fetchExchangeType(currency: string) {
    console.log({ currency });
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then(() => {
        this._exchangeValue.next(+generateRandom(3.75, 4.1).toFixed(2));
      });
  }

  setSidebarMenu(value: boolean) {
    this._showSidebarMenu.next(value);
  }

  setSelectedCategoryId(value: number) {
    this._selectedCategoryId.next(value);
  }

  setSelectedCurrency(value: string) {
    this._selectedCurrency.next(value);

    this._exchangeValue.next(0);
    this.fetchExchangeType(value);
  }

  setProductModal(product: TProduct | undefined) {
    this._modalActive.next(!!product);
    this._productModal.next(product);
  }

  openLateralCart() {
    this._cartLateral.next(true);
  }

  closeLateralCart() {
    this._cartLateral.next(false);
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
      console.log('==> in else condition');
      this._cartProducts.next([...this._cartProducts.getValue(), productCart]);
    }

    // Save into local storage
    localStorage.setItem('cart', JSON.stringify(this._cartProducts.getValue()));

    if (showLateral) {
      this.openLateralCart();
    }
  }

  removeCartProduct(id: number) {
    this._cartProducts.next(
      this._cartProducts.getValue().filter((product) => product.id !== id),
    );
  }

  get cartProductsTotal() {
    const cartTotalAMount = this._cartProducts
      .getValue()
      .reduce((acc, product) => {
        return (
          acc +
          productPrice(this._selectedCurrency.getValue(), product) *
            product.quantity
        );
      }, 0);

    return Math.round((cartTotalAMount + Number.EPSILON) * 100) / 100;
  }

  get cartProducts() {
    return this._cartProducts.value;
  }

  get menus() {
    return this._menus;
  }

  get categories() {
    return this._categories;
  }

  get currencies() {
    return this._currencies;
  }

  get products() {
    return this._products;
  }
}
