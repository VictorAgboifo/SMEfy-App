import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.page.html',
  styleUrls: ['./storefront.page.scss'],
})
export class StorefrontPage {
  products: any[];

  constructor(private productService: ProductService) { }

  ionViewWillEnter() {
    this.productService.listProducts().subscribe(products => {
      this.products = products.map(product => {
        const data: any = product.payload.doc.data(); // Define data as any
        return {
          ...data,
          id: product.payload.doc.id
        };
      });
    });
  }
}
