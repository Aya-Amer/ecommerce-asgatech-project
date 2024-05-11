import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}
  ngOnInit() {
    this.dataStorageService.fetchProducts().subscribe();
  }
}
