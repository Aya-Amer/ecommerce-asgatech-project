import { Component, Input } from '@angular/core';
import { Product } from 'src/app/products/product.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent {
  @Input() order: Product;
  @Input() index: number;
  QtyValue = 1;
}
