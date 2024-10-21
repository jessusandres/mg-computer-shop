import { Component, Input } from '@angular/core';

@Component({
  selector: 'delivery-svg',
  standalone: true,
  imports: [],
  templateUrl: './delivery-svg.component.html',
  styleUrl: './delivery-svg.component.scss',
})
export class DeliverySvgComponent {
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
