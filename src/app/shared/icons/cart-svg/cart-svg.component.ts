import { Component, Input } from '@angular/core';

@Component({
  selector: 'cart-svg',
  standalone: true,
  imports: [],
  templateUrl: './cart-svg.component.html',
  styleUrl: './cart-svg.component.scss',
})
export class CartSvgComponent {
  @Input({
    alias: 'stroke-width',
  })
  strokeWidth: string = '1.5';

  @Input({
    alias: 'stroke',
  })
  stroke: string = 'currentColor';

  @Input({
    alias: 'svg-class',
  })
  svgClass: string = '';
}
