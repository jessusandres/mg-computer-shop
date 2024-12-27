import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { HomeStateProvider } from '@app/providers/home-state.provider';
import { ProductCarrouselComponent } from '@app/shared/product-carrousel/product-carrousel.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, ProductCarrouselComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  @ViewChild('productDetailRef') productDetailRef!: ElementRef;

  isLoading = false;
  categoryId: string = '';
  subCategoryId: string = '';
  activeTab: string = 'description';
  scrollPanel = false;
  key = 'related-item-products';

  constructor(
    private route: ActivatedRoute,
    private readonly homeStateProvider: HomeStateProvider,
  ) {
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId');

    this.mockCall(categoryId!, subCategoryId!);
    this.homeStateProvider.setCategoriesMenu(true);

    window.onscroll = () => {
      this.scrollPanel = window.scrollY > 500;
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoryId = params.get('categoryId');
      const subCategoryId = params.get('subCategoryId');

      this.mockCall(categoryId!, subCategoryId!);
    });
  }

  mockCall(categoryId: string, subCategoryId: string) {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.categoryId = categoryId;
      this.subCategoryId = subCategoryId;
    }, 700);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  scrollToUp() {
    this.productDetailRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
