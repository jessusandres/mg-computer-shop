import { Component, Input } from '@angular/core';
import { ProductCarrouselComponent } from '@app/shared/product-carrousel/product-carrousel.component';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [ProductCarrouselComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss',
})
export class FeaturedProductsComponent {
  @Input({ required: true }) key!: string;
  @Input({ required: true }) title!: string;
}
