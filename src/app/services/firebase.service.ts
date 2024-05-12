import { Injectable } from '@angular/core';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBT6xqvPzppyW6PFT8bnOcRsOshZX_w-os",
      authDomain: "smefy-app.firebaseapp.com",
      projectId: "smefy-app",
      storageBucket: "smefy-app.appspot.com",
      messagingSenderId: "438159637421",
      appId: "1:438159637421:web:4b226850ee34d972ed3f24",
      measurementId: "G-4L8XXST1KH"
    };
    
    
   }
}


