// productService.ts

// Import necessary modules
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from './user.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private firestore: AngularFirestore,
    private userService: UserService,
    private storage: AngularFireStorage // Add AngularFireStorage here
  ) {}

  // Add a single product for basic users
  async addProduct(product: any, imageFile: any): Promise<void> {
    try {
      // Upload image to Firebase Storage
      const imageRef = this.storage.ref(`products/${new Date().getTime()}_${imageFile.name}`);
      await imageRef.put(imageFile);
      const imageUrl = await imageRef.getDownloadURL();

      // Add product to Firestore with the image URL
      await this.firestore.collection('products').add({ ...product, imageUrl });
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  }

  // Get product details
  getProduct(productId: string) {
    return this.firestore.collection('products').doc(productId).valueChanges();
  }

  // List all products for premium users
  listProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  // Method to add multiple products for premium users
  async addMultipleProducts(userId: string, products: any[]): Promise<void> {
    // Same as before
  }
}
