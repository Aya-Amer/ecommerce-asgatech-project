import { Product } from '../products/product.model';
import { Subject } from 'rxjs';
export class OrderService {
  ordersChanged = new Subject<Product[]>();
  private orders: Product[] = [];
  //   private orders: Product[] = [
  //     new Product(
  //       1,
  //       'iPhone 9',
  //       'An apple mobile which is nothing like apple',
  //       549,
  //       12.96,
  //       4.69,
  //       94,
  //       'Apple',
  //       'smartphones',
  //       'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
  //     ),
  //     new Product(
  //       2,
  //       'iPhone X',
  //       'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
  //       899,
  //       17.94,
  //       4.44,
  //       34,
  //       'Apple',
  //       'smartphones',
  //       'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg'
  //     ),
  //   ];

  getOrders() {
    return this.orders.slice();
  }

  setOrders(orders: Product[]) {
    this.orders = orders;
    this.ordersChanged.next(this.orders.slice());
    console.log(this.orders, 'this.orders');
  }
}
