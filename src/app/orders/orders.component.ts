import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}
  ngOnInit() {
    this.dataStorageService.fetchOrders().subscribe();
  }
}
