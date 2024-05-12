import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiumFeaturePageRoutingModule } from './premium-feature-routing.module';

import { PremiumFeaturePage } from './premium-feature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiumFeaturePageRoutingModule
  ],
  declarations: [PremiumFeaturePage]
})
export class PremiumFeaturePageModule {}
