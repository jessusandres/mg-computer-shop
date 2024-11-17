import { Component } from '@angular/core';

/* Extra */
import { TooltipModule } from 'primeng/tooltip';

/* Project */
import { MainSliderComponent } from '@app/components/home/main-slider/main-slider.component';
import { FeaturedCategoriesComponent } from '@app/components/home/featured-categories/featured-categories.component';
import { LatestComponent } from '@app/components/home/latest/latest.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TooltipModule,
    MainSliderComponent,
    FeaturedCategoriesComponent,
    LatestComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
