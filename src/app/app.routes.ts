import { Route, Routes, UrlSegment } from '@angular/router';

/* Project */
import { PageNotFoundComponent } from '@app/pages/page-not-found/page-not-found.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { ProductDetailComponent } from '@app/pages/product-detail/product-detail.component';
import { PrimaryLayoutComponent } from '@app/layouts/primary-layout/primary-layout.component';
import { TAGS } from '@app/helpers';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('@app/pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('@app/pages/logout/logout.component').then(
        (c) => c.LogoutComponent,
      ),
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
        data: {
          tags: TAGS.STORE,
        },
        loadComponent: () =>
          import('@app/pages/shopfront/shopfront.component').then(
            (c) => c.ShopfrontComponent,
          ),
      },
      {
        path: 'featured/:category',
        data: {
          tags: TAGS.FEATURED,
          dynamic: true,
        },
        loadComponent: () =>
          import('@app/pages/shopfront/shopfront.component').then(
            (c) => c.ShopfrontComponent,
          ),
      },
      {
        path: 'shopfront/:category/:sub-category',
        data: {
          tags: TAGS.PRODUCTS,
          dynamic: true,
        },
        loadComponent: () =>
          import('@app/pages/shopfront/shopfront.component').then(
            (c) => c.ShopfrontComponent,
          ),
      },
      {
        path: '**',
        component: PageNotFoundComponent,
        canMatch: [(_: Route, segments: UrlSegment[]) => !!segments.length],
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent },
];
