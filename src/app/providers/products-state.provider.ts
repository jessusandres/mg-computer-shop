import { Injectable } from '@angular/core';
import { Products } from '@app/data';

/* Extra */
import { BehaviorSubject } from 'rxjs';

/* Project */
import { TProduct } from '@app/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsStateProvider {
  private _products = Products;

  private _productModal = new BehaviorSubject<TProduct | undefined>(undefined);
  productModal$ = this._productModal.asObservable();

  private _modalActive = new BehaviorSubject<boolean>(false);
  modalActive$ = this._modalActive.asObservable();

  constructor() {}

  get products() {
    return this._products;
  }

  setProductModal(product: TProduct | undefined) {
    this._modalActive.next(!!product);
    this._productModal.next(product);
  }
}
