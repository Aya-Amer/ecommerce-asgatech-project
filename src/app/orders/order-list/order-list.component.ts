import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit, OnDestroy {
  orders: Product[];
  allPrice: number;
  subscription: Subscription;
  constructor(private orderService: OrderService,
    private router: Router
  ) {}
  ngOnInit() {
    this.subscription = this.orderService.ordersChanged.subscribe(
      (orders: Product[]) => {
        this.orders = orders;
      }
    );
    this.orders = this.orderService.getOrders();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  get totalPrice() {
    let pricesArray = this.orders.map(({ price }) => price);
    this.allPrice = pricesArray.reduce(add, 0);

    function add(accumulator, a) {
      return accumulator + a;
    }
    return this.allPrice;
  }
  BuyItems(){
    this.router.navigate(['/auth']);
  }
}
