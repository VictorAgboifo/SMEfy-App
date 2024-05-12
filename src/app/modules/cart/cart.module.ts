import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CartService]// Add CartService to providers when created
})
export class CartModule { }





