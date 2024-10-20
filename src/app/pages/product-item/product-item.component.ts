import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent implements OnInit {
  isLoading = false;
  categoryId: string = '';
  subCategoryId: string = '';

  constructor(private route: ActivatedRoute) {
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId');

    this.mockCall(categoryId!, subCategoryId!);
  }

  ngOnChanges() {
    // const categoryId = this.route.snapshot.paramMap.get('categoryId');
    // const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId');
    // console.log({ categoryId, subCategoryId });
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
    }, 2000);
  }
}
