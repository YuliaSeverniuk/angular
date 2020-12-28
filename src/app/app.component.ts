import { Component } from '@angular/core';
import {OrderService } from './services/order.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  items = this.orderService.getItems();

  constructor(private orderService: OrderService) {}
}
