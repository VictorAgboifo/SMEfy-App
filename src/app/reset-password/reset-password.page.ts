import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {

  credentials = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  get email() {
    return this.credentials.get('email');
  }

  async resetPassword() {
    const loading = await this.loadingController.create();
    await loading.present();

    const email = this.credentials.value.email;
    this.authService.sendPwReset(email).then(async (response) => {
      await loading.dismiss();

      if (response.error) {
        this.showAlert('Reset failed', response.error.message);
      } else {
        this.showAlert('Success', 'Password reset link sent. Check your email.');
      }
    }).catch(async (error) => {
      await loading.dismiss();
      this.showAlert('Error', 'An unexpected error occurred. Please try again later.');
      console.error('Reset password error:', error);
    });
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
