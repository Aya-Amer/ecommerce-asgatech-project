import { Component, Input } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  // stars =  [1,2,3,4,5];
  adminUser = true;
  @Input() product: Product;
  @Input() index: number;
}
