import { Route, Routes, UrlSegment } from '@angular/router';

/* Project */
import { PageNotFoundComponent } from '@app/pages/page-not-found/page-not-found.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { ProductItemComponent } from '@app/pages/product-item/product-item.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('@app/pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'about-us',
        loadComponent: () =>
          import('@app/pages/about/about.component').then(
            (c) => c.AboutComponent,
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('@app/pages/contact/contact.component').then(
            (c) => c.ContactComponent,
          ),
      },
      {
        path: 'faq',
        loadComponent: () =>
          import('@app/pages/faq/faq.component').then((c) => c.FaqComponent),
      },
      {
        path: 'featured/:category-name',
        loadComponent: () =>
          import('@app/pages/featured/featured.component').then(
            (c) => c.FeaturedComponent,
          ),
      },
      {
        path: 'shopfront/:categoryId/:subCategoryId/products',
        component: ProductItemComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
        canMatch: [
          (_: Route, segments: UrlSegment[]) => {
            console.log('===> MATCH NOT FOUND', segments, segments.length);
            return !!segments.length;
          },
        ],
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent },
];
