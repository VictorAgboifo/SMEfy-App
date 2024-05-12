/*
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from './user.service';



// Define the CartItem interface if not already defined
interface CartItem {
  productId: string;
  quantity: number;
  // Add other properties as needed
}



// Define an interface for the order
interface Order {
  userId: string;
  items: CartItem[];
  total: number;
  status: string;
  // Add other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private firestore: AngularFirestore,
    private userService: UserService
  ) {}

  // Example method to place an order
  async placeOrder(userId: string, order: any): Promise<void> {
    try {
      const userData = await this.userService.hasPremiumAccess(userId);
      if (userData.role.isPremium) {
        // Create a new order document
        await this.firestore.collection('orders').add(order);
      } else {
        throw new Error('Access denied. Upgrade to premium for this feature.');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
*/




//edited testing. may revert to previous from copilot


import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from './user.service';

// Define the CartItem interface if not already defined
interface CartItem {
  price: number;
  productId: string;
  quantity: number;
  // Add other properties as needed
  // For example:
  // color?: string; // Optional property for item color
  // size: string;   // Required property for item size

}

// Define an interface for the order
interface Order {
  userId: string;
  items: CartItem[];
  total: number;
  status: string;
   // Add other properties as needed
  // For example:
  // shippingAddress: string;  // Required property for shipping address
  // paymentMethod: string;    // Required property for payment method
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private firestore: AngularFirestore,
    private userService: UserService
  ) {}

  // Place an order
  async placeOrder(userId: string, order: Order): Promise<void> {
    try {
      // Check if the user has premium access
      const userData = await this.userService.hasPremiumAccess(userId);
      if (userData.role.isPremium) {
        // Calculate total price
        order.total = order.items.reduce((total, item) => total + item.quantity * item.price, 0);

        // Add the order to Firestore
        await this.firestore.collection('orders').add(order);
      } else {
        throw new Error('Access denied. Upgrade to premium for this feature.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      throw error;
    }
  }
}

