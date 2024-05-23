import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  credentials = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['USER', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {}

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  async createAccount() {
    const loading = await this.loadingController.create();
    await loading.present();

    const credentials = this.credentials.value as { email: string; password: string; role: string };
    this.authService.signUp(credentials)
      .then(async (response) => {
        await loading.dismiss();

        if (response.error) {
          this.showAlert('Registration failed', response.error.message);
        } else {
          const user = response.data.user;
          await this.authService.addUserDetails(user.uid, credentials.email, credentials.role);
          this.showAlert('Signup success', 'Please login with credentials to continue!');
          this.router.navigateByUrl('/login', { replaceUrl: true });
        }
      })
      .catch(async (error) => {
        await loading.dismiss();
        this.showAlert('Error', 'An unexpected error occurred. Please try again later.');
        console.error('Signup error:', error);
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
