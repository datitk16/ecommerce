import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import Swal from 'sweetalert2'
import { Customers } from '../models/customer.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchCustomerRequest } from '../models/customer-request.model';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {

  customers = new Customers();
  customerForm: FormGroup;
  requestSearch = new SearchCustomerRequest();
  isshowForm: boolean = false;
  isEditCustomer = false;
  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.customerForm = this.fb.group({
      email: '',
      password: '',
      fullName: '',
      phoneNumber: '',
      userType: '',
      avatar: '',
    });

    this.refresh();

  }
  ngOnDestroy() { }

  refresh() {
    this.customerService.getCustomer().pipe(untilDestroyed(this)).subscribe((customer => {
      this.customers = customer;
    }));
  }

  deleteProduct() {
    Swal.fire({
      title: 'Xác nhận?',
      text: "Bạn muốn xóa sản phẩm!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Đã xóa!',
          'Bạn đã xóa sản phẩm này ra khỏi danh sách',
          'success'
        )
      }
    })
  }

  submit(data) {
    this.requestSearch.email = data.email;
    this.customerService.searchCustomer(this.requestSearch).pipe(untilDestroyed(this)).subscribe(customer => {
      this.customers = customer;
      console.log(this.customers);
      console.log(customer);
    });
  }

  toggleForm() {
    this.isshowForm = !this.isshowForm;
    this.refresh();
  }

  editCustom() {
    this.isshowForm = !this.isshowForm;
    this.isEditCustomer = true;
  }

}
