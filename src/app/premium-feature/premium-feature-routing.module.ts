import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremiumFeaturePage } from './premium-feature.page';

const routes: Routes = [
  {
    path: '',
    component: PremiumFeaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiumFeaturePageRoutingModule {}
