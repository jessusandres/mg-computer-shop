import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/* Project */
import { Currencies, Categories, Menus, Products } from '@app/data';
import { generateRandom } from '@app/helpers';

@Injectable({
  providedIn: 'root',
})
export class HomeStateProvider {
  private _menus = Menus;
  private _currencies = Currencies;
  private _categories = Categories;
  private _products = Products;

  private _showSidebarMenu = new BehaviorSubject<boolean>(false);
  private _selectedCategoryId = new BehaviorSubject<number>(0);
  private _selectedCurrency = new BehaviorSubject<string>('PEN');
  private _exchangeValue = new BehaviorSubject<number>(0);

  showSidebarMenu$ = this._showSidebarMenu.asObservable();
  selectedCategory$ = this._selectedCategoryId.asObservable();
  selectedCurrency$ = this._selectedCurrency.asObservable();
  exchangeValue$ = this._exchangeValue.asObservable();

  constructor() {
    this.fetchExchangeType(this._selectedCurrency.getValue());
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
