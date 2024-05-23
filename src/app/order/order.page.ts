import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage  {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  
}
