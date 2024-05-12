/*
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom } from 'rxjs';

// Define an interface for the user data

interface UserData {
  role: {
    isPremium: boolean;
  };
  // Add other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  // Check if the user has premium access
  async hasPremiumAccess(userId: string): Promise<UserData> {
    try {
      const doc = await firstValueFrom(this.firestore.collection('users').doc<UserData>(userId).get());
      if (doc.exists) {
        return doc.data() as UserData; // Cast the data to UserData type
      } else {
        throw new Error('User does not exist.'); // Handle non-existing user
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // Re-throw the error for further handling
    }
  }
}

*/




import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom } from 'rxjs';
import firebase from 'firebase/compat/app';

// Define an interface for the user data
interface UserData {
  role: {
    isPremium: boolean;
  };
  // Add other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private firestore: AngularFirestore) {}

  // Check if the user has premium access
  async hasPremiumAccess(userId: string): Promise<UserData> {
    try {
      const doc = await firstValueFrom(this.firestore.collection('users').doc<UserData>(userId).get());
      if (doc.exists) {
        return doc.data() as UserData; // Cast the data to UserData type
      } else {
        throw new Error('User does not exist.'); // Handle non-existing user
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // Re-throw the error for further handling
    }
  }

  // Method to upgrade the user to premium
  async upgradeToPremium(userId: string): Promise<void> {
    try {
      const userRef = this.firestore.collection('users').doc(userId);
      await userRef.update({
        'role.isPremium': true
      });
      console.log('User upgraded to premium successfully');
    } catch (error) {
      console.error('Error upgrading user to premium:', error);
      throw error; // Re-throw the error for further handling
    }
  }

  // Method to downgrade the user to basic
async downgradeToBasic(userId: string): Promise<void> {
  try {
    const userRef = this.firestore.collection('users').doc(userId);
    await userRef.update({
      'role.isPremium': false
    });
    console.log('User downgraded to basic successfully');
  } catch (error) {
    console.error('Error downgrading user to basic:', error);
    throw error; // Re-throw the error for further handling
  }
}

}



