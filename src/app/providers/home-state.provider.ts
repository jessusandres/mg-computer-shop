import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/* Project */
import Menus from '@app/data/menus.json';
import Categories from '@app/data/categories.json';

@Injectable({
  providedIn: 'root',
})
export class HomeStateProvider {
  private _menus = Menus;
  private _categories = Categories;

  private _showSidebarMenu = new BehaviorSubject<boolean>(false);
  private _selectedCategoryId = new BehaviorSubject<number>(0);

  showSidebarMenu$ = this._showSidebarMenu.asObservable();
  selectedCategory$ = this._selectedCategoryId.asObservable();

  constructor() {}

  setSidebarMenu(value: boolean) {
    this._showSidebarMenu.next(value);
  }

  setSelectedCategoryId(value: number) {
    this._selectedCategoryId.next(value);
  }

  get menus() {
    return this._menus;
  }

  get categories() {
    return this._categories;
  }

  get showSidebarMenu() {
    return this._showSidebarMenu.getValue();
  }

  get selectedCategoryId() {
    return this._selectedCategoryId.getValue();
  }
}
