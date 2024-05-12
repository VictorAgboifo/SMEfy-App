import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';



interface Product {
  id: string;
  name: string;
  // include other product properties here
}

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.listProducts().subscribe(data => {
      this.products = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        };
      });
    });
  }

  addToCart(product: Product) {
    // Add product to cart logic
  }
}




