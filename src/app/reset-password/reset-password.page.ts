import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetForm: FormGroup;
  resetError: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async resetPassword() {
    if (this.resetForm.invalid) {
      return;
    }

    const email = this.resetForm.value.email;

    try {
      await this.authService.resetPassword(email);
      this.showAlert('Check Your Email', 'If an account exists for the email provided, we have sent a link to reset your password.');
    } catch (error) {
      this.showErrorAlert('An error occurred while attempting to reset the password. Please try again later.');
    }
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigateByUrl('/login');
        }
      }],
    });
    await alert.present();
  }

  private async showErrorAlert(message: string) {
    this.resetError = message;
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigateByUrl('/login');
        }
      }],
    });
    await alert.present();
  }
}







