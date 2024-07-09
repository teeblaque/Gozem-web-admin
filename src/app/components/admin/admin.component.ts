import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  packages: any[] = [];
  deliveries: any[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

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
      this.deliveries = data.deliveries;
    });
  }

  createPackage(){
      this.router.navigateByUrl('create-package')
  }

  createDelivery(){
    this.router.navigateByUrl('create-delivery')
  }

  deletePackage(id: string) {
    this.apiService.deletePackage(id).subscribe(() => {
      this.loadPackages();
    });
  }

  deleteDelivery(id: string) {
    this.apiService.deleteDelivery(id).subscribe(() => {
      this.loadDeliveries();
    });
  }
}
