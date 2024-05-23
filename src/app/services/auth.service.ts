import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private functions: AngularFireFunctions) {
    this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.functions.httpsCallable('isAdmin')({ uid: user.uid });
        } else {
          return of(false);
        }
      }),
    ).subscribe();
  }

  getCurrentUser(): Observable<any> {
    return this.afAuth.authState;
  }

  signUp(credentials: { email: string; password: string; role: string }): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(({ user }) => {
        if (user) {
          return { data: { user } };
        }
        return { error: 'User creation failed' };
      })
      .catch(error => {
        return { error };
      });
  }

  addUserDetails(id: string, email: string, role: string): Promise<void> {
    return this.functions.httpsCallable('addUserDetails')({ id, email, role }).toPromise();
  }

  signIn(credentials: { email: string; password: string }): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(({ user }) => {
        if (user) {
          return { data: { user } };
        }
        return { error: 'Sign in failed' };
      })
      .catch(error => {
        return { error };
      });
  }

  sendPwReset(email: string): Promise<any> {
    return this.afAuth.sendPasswordResetEmail(email)
      .then(() => {
        return { data: 'Password reset email sent' };
      })
      .catch(error => {
        return { error };
      });
  }
}
