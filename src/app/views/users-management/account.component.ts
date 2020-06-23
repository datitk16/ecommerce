import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import Swal from 'sweetalert2'
import { Customers, CustomerItem } from '../models/customer.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchCustomerRequest, DeleteCustomerRequest } from '../models/customer-request.model';
import { untilDestroyed } from 'ngx-take-until-destroy';


@Component({
  templateUrl: 'account.component.html'
})
export class AccountComponent implements OnInit, OnDestroy {

  customers: CustomerItem[] = []
  customerForm: FormGroup;
  requestSearch = new SearchCustomerRequest();
  isshowForm: boolean = false;
  isEditCustomer = false;
  requestDelete = new DeleteCustomerRequest();
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
      this.customers = customer.items.filter(x => !x.authenticate);
    }));
  }

  deleteProduct(id) {
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
        this.requestDelete.id = id;
        this.customerService.deleteCustomer(this.requestDelete).subscribe(() => {
          this.refresh();
        })
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
      this.customers = customer.items;

    });
  }

  verifyUser(id) {
    this.requestDelete.id = id;
    this.customerService.verifyUser(this.requestDelete).subscribe(() => {
      this.refresh();
    })
  }

}
