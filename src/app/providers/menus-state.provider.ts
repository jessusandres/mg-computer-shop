import { Injectable } from '@angular/core';
import { Categories, Menus } from '@app/data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenusStateProvider {
  private _menus = Menus;
  private _categories = Categories;

  private _categoriesMenu = new BehaviorSubject<boolean>(false);
  categoriesMenu$ = this._categoriesMenu.asObservable();

  private _selectedCategoryId = new BehaviorSubject<number>(0);
  selectedCategory$ = this._selectedCategoryId.asObservable();

  private _cartLateral = new BehaviorSubject<boolean>(false);
  cartLateral$ = this._cartLateral.asObservable();

  private _showSidebarMenu = new BehaviorSubject<boolean>(false);
  showSidebarMenu$ = this._showSidebarMenu.asObservable();

  constructor() {}

  get menus() {
    return this._menus;
  }

  get categories() {
    return this._categories;
  }

  setSidebarMenu(value: boolean) {
    this._showSidebarMenu.next(value);
  }

  setSelectedCategoryId(value: number) {
    this._selectedCategoryId.next(value);
  }

  openLateralCart() {
    this._cartLateral.next(true);
  }

  closeLateralCart() {
    this._cartLateral.next(false);
  }
  setCategoriesMenu(open: boolean) {
    this._categoriesMenu.next(open);
  }
}
