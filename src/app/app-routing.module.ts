import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },

  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingPageModule)
  },

  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },


  {
    path: 'premium-feature',
    loadChildren: () => import('./premium-feature/premium-feature.module').then(m => m.PremiumFeaturePageModule)
  },


  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'product-management',
    loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementPageModule)
  },
  {
    path: 'premium-feature',
    loadChildren: () => import('./premium-feature/premium-feature.module').then(m => m.PremiumFeaturePageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  },
  

  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
