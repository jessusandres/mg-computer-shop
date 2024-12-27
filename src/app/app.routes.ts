import { Route, Routes, UrlSegment } from '@angular/router';

/* Project */
import { PageNotFoundComponent } from '@app/pages/page-not-found/page-not-found.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { ProductDetailComponent } from '@app/pages/product-detail/product-detail.component';
import { PrimaryLayoutComponent } from '@app/layouts/primary-layout/primary-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('@app/pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
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
        path: 'store',
        loadComponent: () =>
          import('@app/pages/shopfront/shopfront.component').then(
            (c) => c.ShopfrontComponent,
          ),
      },
      {
        path: 'featured/:category-name',
        loadComponent: () =>
          import('@app/pages/featured/featured.component').then(
            (c) => c.FeaturedComponent,
          ),
      },
      {
        path: 'shopfront/:category/:subCategory/products',
        loadComponent: () =>
          import('@app/pages/shopfront/shopfront.component').then(
            (c) => c.ShopfrontComponent,
          ),
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
