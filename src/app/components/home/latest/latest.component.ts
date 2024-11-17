import { Component } from '@angular/core';

/* Project */
import { ProductCarrouselComponent } from '@app/shared/product-carrousel/product-carrousel.component';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [ProductCarrouselComponent],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.scss',
})
export class LatestComponent {
  constructor() {}
}
