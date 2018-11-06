import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { Customer } from './customer';
import { Feature } from './feature';

@Injectable()
export class DataService {

  private customersUrl = 'http://localhost:8080/api/customer/';  // URL to web API
  private featureUrl = 'http://localhost:8080/api/feature/';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // Get all customers
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
               .toPromise()
               .then(response => response.json() as Customer[])
               .catch(this.handleError);
  }

  getCustomer(id: number): Promise<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  //feature details
  getFeatures(): Promise<Feature[]> {
    return this.http.get(this.featureUrl)
               .toPromise()
               .then(response => response.json() as Feature[])
               .catch(this.handleError);
  }

  getFeature(fid: number): Promise<Feature> {
    const url = `${this.featureUrl}/${fid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Feature)
      .catch(this.handleError);
  }

//create 
  create(customer: Customer): Promise<Customer> {
    return this.http
      .post(this.customersUrl, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Customer)
      .catch(this.handleError);
  }

  //create feature
  createFeature(feature: Feature): Promise<Feature> {
    return this.http
      .post(this.featureUrl, JSON.stringify(feature), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Feature)
      .catch(this.handleError);
  }

  //update 
  update(customer: Customer): Promise<Customer> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http
      .put(url, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(() => customer)
      .catch(this.handleError);
  }

  //update feature
  updateFeature(feature: Feature): Promise<Feature> {
    const url = `${this.featureUrl}/${feature.fid}`;
    return this.http
      .put(url, JSON.stringify(feature), {headers: this.headers})
      .toPromise()
      .then(() => feature)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  deleteFeature(fid: number): Promise<void> {
    const url = `${this.featureUrl}/${fid}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
