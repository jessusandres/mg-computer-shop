import { provideRouter, Routes } from '@angular/router';

/* Project */
import { PageNotFoundComponent } from '@app/pages/page-not-found/page-not-found.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { ProductItemComponent } from '@app/pages/product-item/product-item.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'shopfront/:categoryId/:subCategoryId/products',
        component: ProductItemComponent,
      },
    ],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('@app/pages/about/about.component').then((c) => c.AboutComponent),
  },
  { path: '**', component: PageNotFoundComponent },
];
