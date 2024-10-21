import { Component, Input } from '@angular/core';

@Component({
  selector: 'arrow-down-svg',
  standalone: true,
  imports: [],
  templateUrl: './arrow-down-svg.component.html',
  styleUrl: './arrow-down-svg.component.scss',
})
export class ArrowDownSvgComponent {
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
