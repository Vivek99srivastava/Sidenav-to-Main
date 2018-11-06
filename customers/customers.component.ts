import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { DataService } from '../data.service';
import { Feature } from '../feature';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})

export class CustomersComponent implements OnInit {
  customers: Customer[];
  features: Feature[];
  feature = new Feature() ;
  constructor(private dataService: DataService) {
  
  }

  getCustomers() {
     return this.dataService.getCustomers().then(customers => this.customers = customers);
  }

  getFeatures(){
    return this.dataService.getFeatures().then(features => this.features = features);
  }

  deleteFeature(): void {
    this.dataService.deleteFeature(this.feature.fid);
  }
  
  ngOnInit(): void {
     this.getCustomers();
     this.getFeatures();
  }

}
