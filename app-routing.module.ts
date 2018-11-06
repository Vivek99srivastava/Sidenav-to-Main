import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from './customers/customers.component';
import { CreateFeatureComponent } from './create-feature/create-feature.component';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'customer', pathMatch: 'full' },
   { path: 'customer',  component: CustomersComponent },
   { path: 'feature',  component: CreateFeatureComponent },
   { path: 'add', component: CreateCustomerComponent },
   { path: 'detail/:id', component: CustomerDetailsComponent },
   { path: 'feature/:fid', component: FeatureDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
