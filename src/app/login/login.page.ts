// login.page.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }

  public async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      await this.signIn(email, password);
    }
  }

  private async signIn(email: string, password: string): Promise<void> {
    const loading = await this.showLoading('Logging in...');
    try {
      await this.authService.login(email, password);
      console.log('Logged in successfully');
      this.router.navigate(['/overview']);
    } catch (error) {
      await this.handleError(error);
    } finally {
      await loading.dismiss();
    }
  }

  private async showLoading(message: string): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingController.create({ message });
    await loading.present();
    return loading;
  }

  private async handleError(error: any): Promise<void> {
    console.error('Login failed:', error);
    let errorMessage = 'An unexpected error occurred. Please try again later.';
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'There is no user corresponding to the given email.';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = 'The password is incorrect.';
    }
    await this.showToast(errorMessage, 'danger');
  }

  private async showToast(message: string, color: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color
    });
    await toast.present();
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}








