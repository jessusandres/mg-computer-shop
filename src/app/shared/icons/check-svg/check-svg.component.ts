import { Component, Input } from '@angular/core';

@Component({
  selector: 'check-svg',
  standalone: true,
  imports: [],
  templateUrl: './check-svg.component.html',
  styleUrl: './check-svg.component.scss',
})
export class CheckSvgComponent {
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
