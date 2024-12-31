import { NgForOf, NgIf } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

/* Project */
import { HomeStateProvider } from '@app/providers/home-state.provider';
import { Payments, TProduct } from '@app/types';
import { productPrice, productSymbol } from '@app/helpers';
import { MenusStateProvider } from '@app/providers/menus-state.provider';
import { ProductsStateProvider } from '@app/providers/products-state.provider';
import { CurrencyStateProvider } from '@app/providers/currency-state.provider';
import { CartStateProvider } from '@app/providers/cart-state.provider';

@Component({
  selector: 'product-modal',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss',
})
export class ProductModalComponent implements OnDestroy, OnInit {
  @ViewChild('productModalRef', { static: true }) elementRef!: ElementRef;
  private readonly outsideListener!: () => void;

  cartForm!: FormGroup;
  currency!: string;
  priceText!: string;
  product?: TProduct;

  constructor(
    private readonly router: Router,
    private renderer: Renderer2,
    private readonly homeStateProvider: HomeStateProvider,
    private readonly menusStateProvider: MenusStateProvider,
    private readonly productsStateProvider: ProductsStateProvider,
    private readonly currencyStateProvider: CurrencyStateProvider,
    private readonly cartStateProvider: CartStateProvider,
    private readonly formBuilder: FormBuilder,
  ) {
    this.outsideListener = this.renderer.listen(
      'window',
      'click',
      this.outsideCallback.bind(this),
    );
  }

  ngOnInit() {
    this.currencyStateProvider.selectedCurrency$.subscribe((currency) => {
      this.currency = currency;
    });

    this.productsStateProvider.productModal$.subscribe((product) => {
      this.product = product;

      if (product) {
        this.priceText =
          productSymbol(this.currency) + productPrice(this.currency, product);

        this.cartForm.setControl(
          'cartAmount',
          new FormControl(1, {
            nonNullable: true,
            validators: [
              Validators.required,
              Validators.min(1),
              Validators.max(product.stock),
            ],
          }),
        );

        this.cartForm.setControl(
          'warehouse',
          new FormControl(0, {
            nonNullable: true,
            validators: [Validators.required, Validators.min(1)],
          }),
        );
      } else {
        this.priceText = 'No Disponible';
        this.cartForm = this.formBuilder.group({
          cartAmount: new FormControl(1, {
            nonNullable: true,
            validators: [Validators.required],
          }),
          warehouse: new FormControl(0, {
            nonNullable: true,
            validators: [Validators.required, Validators.min(1)],
          }),
        });
      }
    });
  }

  closeModal() {
    this.productsStateProvider.setProductModal(undefined);
  }

  outsideCallback(event: Event) {
    const outside = !this.elementRef.nativeElement.contains(event.target);

    if (outside) this.closeModal();
  }

  async viewDetails() {
    if (this.product) {
      await this.router.navigate([`/products/${this.product.id}`]);
    }

    this.productsStateProvider.setProductModal(undefined);
  }

  subtractOne() {
    console.log({ v: this.cartAmount });
    if (this.product && this.cartAmount > 0) {
      this.cartAmountControl?.setValue(this.cartAmount - 1);
    }
  }

  get cartAmountControl(): AbstractControl<number> {
    return this.cartForm.get('cartAmount')!;
  }

  get cartAmount(): number {
    return this.cartForm.get('cartAmount')!.value;
  }

  addOne() {
    if (this.product && this.cartAmount < this.product.stock) {
      this.cartAmountControl?.setValue(this.cartAmount + 1);
    }
  }

  addToCart(event: Event) {
    event.stopPropagation();
    console.log({
      errors: this.cartAmountControl?.errors,
      valid: this.cartForm.valid,
    });

    if (this.product && this.cartForm.valid) {
      console.log({
        product: this.product,
        values: this.cartForm.getRawValue(),
      });
      const formData = this.cartForm.getRawValue();

      this.cartStateProvider.addProductToCart(
        {
          id: this.product.id,
          quantity: formData.cartAmount,
          warehouse: formData.warehouse,
          name: this.product.name,
          pricePEN: this.product.pricePEN,
          priceUSD: this.product.priceUSD,
          priceEUR: this.product.priceEUR,
          image: this.product.image,
        },
        true,
      );

      this.productsStateProvider.setProductModal(undefined);
      this.menusStateProvider.openLateralCart();
    }
  }

  setWarehouse(warehouseId: number) {
    if (this.product) {
      this.cartForm.get('warehouse')!.setValue(warehouseId);
    }
  }

  ngOnDestroy() {
    if (this.outsideListener) this.outsideListener();
  }

  protected readonly Payments = Payments;
  protected readonly Number = Number;
}
