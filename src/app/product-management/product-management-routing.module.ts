import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementPage } from './product-management.page';

const routes: Routes = [
  {
    path: '',
    component: ProductManagementPage,
    children: [

      {
        path: 'add-product',children: [{path: '',loadChildren: () => import ('../add-product/add-product.module').then(m => m.AddProductPageModule)}]
      },

      {
        path: 'storefront',children: [{path: '',loadChildren: () => import('../storefront/storefront.module').then( m => m.StorefrontPageModule)}]
      },

      {
        path: 'products',children: [{path: '',loadChildren: () => import ('../products/products.module').then(m => m.ProductsPageModule)}]
      },
     
      
      {
        path: '',
        redirectTo: '/product-management/add-product',
        pathMatch: 'full',
      }
    ]
  },
  /*{
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  }*/
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductManagementPageRoutingModule {}
