import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage {
  productName: string;
  productDescription: string;
  productPrice: number;
  productQuantity: number;
  productImage: File;

  constructor(
    private productService: ProductService,
    private storage: AngularFireStorage
  ) {}

  async addProduct(): Promise<void> {
    const product = {
      name: this.productName,
      description: this.productDescription,
      price: this.productPrice,
      quantity: this.productQuantity,
      imageUrl: '' // Placeholder for the image URL
    };

    if (this.productImage) {
      const filePath = `products/${new Date().getTime()}_${Math.random()}`;
      const uploadTask = this.storage.upload(filePath, this.productImage);

      uploadTask.then(async snapshot => {
        const downloadUrl = await snapshot.ref.getDownloadURL();
        product.imageUrl = downloadUrl; // Update the image URL in the product object
        this.productService.addProduct(product, this.productImage);
        // Reset form values after successful upload
        this.productName = '';
        this.productDescription = '';
        this.productPrice = null;
        this.productQuantity = null;
        this.productImage = null;
      }).catch(error => {
        console.error('Error uploading image:', error);
      });
    } else {
      console.error('Please select an image for the product.');
    }
  }

  onFileChanged(event: any): void {
    this.productImage = event.target.files[0];
  }

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
}
