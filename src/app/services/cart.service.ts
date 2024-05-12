import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from './user.service';
import firebase from 'firebase/compat/app'; // Import firebase



// Define an interface for the cart item
interface CartItem {
  productId: string;
  quantity: number;
  // Add other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private firestore: AngularFirestore,
    private userService: UserService
  ) {}

  // Example method to add an item to the cart
  async addToCart(userId: string, item: any): Promise<void> {
    try {
      const userData = await this.userService.hasPremiumAccess(userId);
      if (userData.role.isPremium) {
        const cartRef = this.firestore.collection('carts').doc(userId);
        await cartRef.update({
          items: firebase.firestore.FieldValue.arrayUnion(item) // Use firebase.firestore.FieldValue
        });
      } else {
        throw new Error('Access denied. Upgrade to premium for this feature.');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}







