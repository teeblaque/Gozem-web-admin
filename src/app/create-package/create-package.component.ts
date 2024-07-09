import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  packages: any[] = [];
  newPackage: any = {
    description: '',
    weight: 0,
    width: 0,
    height: 0,
    depth: 0,
    from_name: '',
    from_address: '',
    from_location: { lat: null, lng: null },
    to_name: '',
    to_address: '',
    to_location: { lat: null, lng: null },
  };
  
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  createPackage() {
    this.apiService.createPackage(this.newPackage).subscribe(() => {
      this.newPackage = {};
      this.loadPackages();
      this.router.navigateByUrl('admin');
    });
  }

  loadPackages() {
    this.apiService.getPackages().subscribe(data => {
      this.packages = data;
    });
  }

}
