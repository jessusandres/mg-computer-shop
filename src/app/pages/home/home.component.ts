import { Component } from '@angular/core';

/* Extra */
import { TooltipModule } from 'primeng/tooltip';

/* Project */
import { MainSliderComponent } from '@app/components/home/main-slider/main-slider.component';
import { FeaturedCategoriesComponent } from '@app/components/home/featured-categories/featured-categories.component';
import { LatestComponent } from '@app/components/home/latest/latest.component';
import { FeaturedProductsComponent } from '@app/components/home/featured-products/featured-products.component';
import { PrimaryBannerComponent } from '@app/components/home/primary-banner/primary-banner.component';
import { SecondarySliderComponent } from '@app/components/home/secondary-slider/secondary-slider.component';
import { SiteReferenceComponent } from '@app/components/home/site-reference/site-reference.component';
import { HardwareGuideComponent } from '@app/components/home/hardware-guide/hardware-guide.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TooltipModule,
    MainSliderComponent,
    FeaturedCategoriesComponent,
    LatestComponent,
    FeaturedProductsComponent,
    PrimaryBannerComponent,
    SecondarySliderComponent,
    SiteReferenceComponent,
    HardwareGuideComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
