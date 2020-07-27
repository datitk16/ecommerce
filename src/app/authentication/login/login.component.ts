import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AppState } from '../../+state/app.state';
import { login } from '../+state/authentication.actions';
import { DialogMessageService } from '../../services/dialog-message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private dialogService: DialogMessageService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit(value) {
    this.userService.login(value.email, value.password).subscribe(result => {
      if (result.user.userType === 'admin') {
        this.userService.setCustomer(result);
        this.router.navigateByUrl('/dashboard');
        return this.dialogService.showInfoMessageSuccess('Thông báo', 'Đăng nhập thành công!');
      }

      this.dialogService.showInfoMessageErr('Thông báo', 'Bạn không có quyền truy cập!');

    }, () => {
      this.dialogService.showInfoMessageErr('Thông báo', 'Tài khoản hoặc mật khẩu không chính xác!');
    })
  }

}
