import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {
  packages: any[] = [];
  newDelivery: any = {
    package_id: '',
    location: { lat: null, lng: null },
    status: '',
  };
  deliveries: any[] = [];

  constructor(private apiService: ApiService, private router: Router, private socketService: SocketService) { }

  ngOnInit(): void {
    this.loadPackages()
  }

    createDelivery() {
    this.apiService.createDelivery(this.newDelivery).subscribe(() => {
      this.socketService.emitEvent('delivery_updated', this.newDelivery);
      this.newDelivery = {};
      this.loadDeliveries();
      this.router.navigateByUrl('admin');
    });
  }

  loadDeliveries() {
    this.apiService.getDeliveries().subscribe(data => {
      this.deliveries = data;
    });
  }

  loadPackages() {
    this.apiService.getPackages().subscribe(data => {
      this.packages = data;
      console.log(this.packages);
    });
  }

}
