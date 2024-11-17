import { Component, Input } from '@angular/core';
import { ProductCarrouselComponent } from '@app/shared/product-carrousel/product-carrousel.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-secondary-slider',
  standalone: true,
  imports: [ProductCarrouselComponent, RouterLink],
  templateUrl: './secondary-slider.component.html',
  styleUrl: './secondary-slider.component.scss',
})
export class SecondarySliderComponent {
  @Input({
    required: true,
    alias: 'key',
  })
  key!: string;
}
