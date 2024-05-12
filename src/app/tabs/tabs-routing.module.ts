import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
      },
      {
        path: 'add-product',
        loadChildren: () => import('../add-product/add-product.module').then( m => m.AddProductPageModule)
      },
      {
        path: 'storefront',
        loadChildren: () => import('../storefront/storefront.module').then( m => m.StorefrontPageModule)
      },
      {
        path: '',
        redirectTo: 'add-product', // Redirect to default tab
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs', // Redirect to tabs page by default
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}










