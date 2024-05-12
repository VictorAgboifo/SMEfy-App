import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'src/app/services/order.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [OrderService]// Add OrderService to providers when created
})
export class OrderModule { }






