import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CustomerService } from '../services/customer.service';
import { _ } from 'lodash';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  verifyStatus = false;
  @ViewChild('selectAvatarInput', { static: false }) selectAvatarInput: ElementRef;
  constructor(
    private userService: UserService,
    private customerService: CustomerService,
    private router: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getCustomer().user;

  }
  verifyPassword(password) {

    this.customerService.verifyPassword(password).subscribe(result => {
      this.verifyStatus = result[0];
    })
  }

  sendNewPassword(newpassword) {
    this.customerService.changePassword(newpassword).subscribe(result => {

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mật khẩu đã được cập nhật!',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        this.router.navigateByUrl('/dashboard');
      }, 1500);

    })
  }

  uploadAvatar() {
    const imgUrl = this.selectAvatarInput.nativeElement.files[0];
    const file = new FormData();
    file.set('products', imgUrl);
    this.httpClient.post('http://localhost:6789/api/products/images', file).subscribe(res => {
      console.log('success')
    })

  }

}
