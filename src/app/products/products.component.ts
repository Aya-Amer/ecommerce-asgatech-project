import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private dataStorageService: DataStorageService) {}
  // storeData() {
  //   this.dataStorageService.storeProducts();
  // }
  ngOnInit() {
    this.dataStorageService.fetchProducts().subscribe();
  }
}
