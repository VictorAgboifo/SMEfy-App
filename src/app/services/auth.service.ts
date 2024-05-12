//AUTH.SERVICE.TS

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // User registration
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // User login
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // User logout
  logout() {
    return this.afAuth.signOut();
  }

  // Password reset
  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}

