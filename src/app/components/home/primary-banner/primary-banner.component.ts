import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-primary-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './primary-banner.component.html',
  styleUrl: './primary-banner.component.scss',
})
export class PrimaryBannerComponent {}
