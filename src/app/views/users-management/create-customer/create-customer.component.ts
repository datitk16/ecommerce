import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { CreateCustomerRequest } from '../../models/customer-request.model';
import { HttpClient } from '@angular/common/http';
import { DialogMessageService } from '../../../services/dialog-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createCustomerForm: FormGroup;
  request = new CreateCustomerRequest();
  @ViewChild('selectAvatarInput', { static: false }) selectAvatarInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private httpClient: HttpClient,
    private dialogService: DialogMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.createCustomerForm = this.fb.group({
      email: '',
      password: '',
      fullName: '',
      phoneNumber: '',
      userType: '',
    });
  }

  submit(data) {
    this.request = data;
    this.customerService.createCustomer(this.request).subscribe(customer => {
      const imgUrl = this.selectAvatarInput.nativeElement.files[0];
      const file = new FormData();
      file.set('avatar', imgUrl);
      this.httpClient.post(`http://localhost:6789/api/users/avatarNewUser/${customer._id}`, file).subscribe(user => {
        this.dialogService.showInfoMessageSuccess('Thông báo', 'Tạo mới người dùng thành công!');
        setTimeout(() => {
          window.location.reload();
        }, 1500)

      }, () => {
        this.dialogService.showInfoMessageSuccess('Thông báo', 'Lỗi rồi!');
      })
    })
  }

}
