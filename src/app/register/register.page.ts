// register.page.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoadingController,  ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  successMessage: string = '';
  showPassword: boolean;
  //loadingController: any;

  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authService: AuthService
    
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  async onSubmit() {
    const loading = await this.showLoading('In progress ...');
    this.submitted = true;
    if (this.registerForm.invalid) {
      loading.dismiss();
      return;
    }
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    this.authService.register(email, password)
      .then(() => {
        loading.dismiss();
        this.successMessage = 'Registration successful! Redirecting...';
        this.showToast(this.successMessage, 'success');
        this.router.navigate(['/product-management']);
      })
      .catch((error) => {
        loading.dismiss();
        this.handleError(error);
      });
  }
  

  handleError(error: any) {
    let message = 'Registration failed. Please try again later.';
    if (error.code === 'auth/email-already-in-use') {
      message = 'The email address is already in use by another account.';
    }
    this.presentToast(message);
  }
  presentToast(message: string) {
    this.showToast(message, 'danger');
  }
  

  private async showToast(message: string, color: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color
    });
    await toast.present();
  }

  private async showLoading(message: string): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingController.create({ message });
    await loading.present();
    return loading;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}










