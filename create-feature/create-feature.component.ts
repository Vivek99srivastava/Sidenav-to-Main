import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { Feature } from '../feature';

@Component({
  selector: 'app-create-feature',
  templateUrl: './create-feature.component.html',
  styleUrls: ['./create-feature.component.css']
})
export class CreateFeatureComponent implements OnInit {
  feature = new Feature;
  submitted = false;
  constructor(private dataService: DataService,
              private location: Location) { }

  ngOnInit() {
  }

  newFeature(): void {
    this.submitted = false;
    this.feature = new Feature();
  }

  private save(): void {
    this.dataService.createFeature(this.feature);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

}
