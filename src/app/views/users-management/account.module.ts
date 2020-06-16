import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { UsersComponent } from './users.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProductsComponent } from './products.component';

// Buttons Routing
import { ButtonsRoutingModule } from './users-management-routing.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AccountComponent,
    ProductsComponent,
    UsersComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
  ]
})
export class AccountModule { }
