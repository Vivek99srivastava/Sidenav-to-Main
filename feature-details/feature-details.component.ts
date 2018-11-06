import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Feature } from '../feature';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
  styleUrls: ['./feature-details.component.css']
})
export class FeatureDetailsComponent implements OnInit {
  feature = new Feature() ;
  submitted = false;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.dataService.getFeature(+params['fid']))
      .subscribe(feature => this.feature = feature);
  }
  
  onSubmit(): void {
    this.submitted = true;
    this.dataService.updateFeature(this.feature);
  }

  
  deleteFeature(): void {
    this.dataService.deleteFeature(this.feature.fid).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }


}


