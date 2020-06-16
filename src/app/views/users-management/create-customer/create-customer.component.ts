import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { CreateCustomerRequest } from '../../models/customer-request.model';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createCustomerForm: FormGroup;
  request = new CreateCustomerRequest();
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {

    this.createCustomerForm = this.fb.group({
      email: '',
      password: '',
      fullName: '',
      phoneNumber: '',
      userType: '',
      avatar: '',
    });
  }

  submit(data) {
    this.request = data;
    this.customerService.createCustomer(this.request).subscribe(customer => {
      console.log(customer)
    })
  }
}
