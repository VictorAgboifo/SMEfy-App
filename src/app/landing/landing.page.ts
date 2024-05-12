
//TYPESCRIPT
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {

  constructor(private router: Router, private loadingController: LoadingController) { }

  async startLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent',
      translucent: true,
      cssClass: 'custom-loading'
    });
  
    await loading.present();
  
    setTimeout(async () => {
      await loading.dismiss();
    console.log('Navigating to /login'); // Debugging line
    this.router.navigate(['/login']).then(success => {
      console.log('Navigation successful:', success); // Debugging line
    }).catch(error => {
      console.error('Navigation error:', error); // Debugging line
    });
  }, 2000); // Wait for 2 seconds before dismissing the loading spinner
  }

 
   
}  



