import { Component } from '@angular/core';

/* Project */
import { ProductsStateProvider } from '@app/providers/products-state.provider';

@Component({
  selector: 'modal-overlay',
  standalone: true,
  imports: [],
  templateUrl: './modal-overlay.component.html',
  styleUrl: './modal-overlay.component.scss',
})
export class ModalOverlayComponent {
  display = false;

  constructor(private readonly productsStateProvider: ProductsStateProvider) {
    this.productsStateProvider.modalActive$.subscribe((value) => {
      this.display = value;
    });
  }
}
