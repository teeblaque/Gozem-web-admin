import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  packages: any[] = [];
  deliveries: any[] = [];
  newPackage: any = {};
  newDelivery: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadDeliveries();
    this.loadPackages();
  }

  loadPackages() {
    this.apiService.getPackages().subscribe(data => {
      this.packages = data;
    });
  }

  loadDeliveries() {
    this.apiService.getDeliveries().subscribe(data => {
      this.deliveries = data;
    });
  }

  createPackage() {
    this.apiService.createPackage(this.newPackage).subscribe(() => {
      this.newPackage = {};
      this.loadPackages();
    });
  }

  createDelivery() {
    this.apiService.createDelivery(this.newDelivery).subscribe(() => {
      this.newDelivery = {};
      this.loadDeliveries();
    });
  }

}
