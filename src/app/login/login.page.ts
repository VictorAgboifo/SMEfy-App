import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  credentials = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {
    this.authService.getCurrentUser().subscribe((user) => {
      if (user) {
        this.router.navigateByUrl('/product-management', { replaceUrl: true });
      }
    });
  }

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const credentials = this.credentials.value as { email: string; password: string };
    this.authService.signIn(credentials).then(async (data) => {
      await loading.dismiss();

      if (data.error) {
        this.showAlert('Login failed', data.error.message);
      } else {
        this.router.navigateByUrl('/product-management', { replaceUrl: true });
      }
    }).catch(async (error) => {
      await loading.dismiss();
      this.showAlert('Login error', 'An unexpected error occurred. Please try again later.');
      console.error('Login error:', error);
    });
  }

  async forgotPw() {
    const alert = await this.alertController.create({
      header: 'Receive a new password',
      message: 'Please insert your email',
      inputs: [
        {
          type: 'email',
          name: 'email',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Reset password',
          handler: async (result) => {
            const loading = await this.loadingController.create();
            await loading.present();
            const { data, error } = await this.authService.sendPwReset(result.email);
            await loading.dismiss();

            if (error) {
              this.showAlert('Failed', error.message);
            } else {
              this.showAlert('Success', 'Please check your emails for further instructions!');
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async showAlert(title: string, msg: string) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
